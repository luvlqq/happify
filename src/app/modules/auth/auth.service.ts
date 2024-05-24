import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { FastifyReply } from 'fastify';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { AuthRepository } from './auth.repository';
import { LoginDto, RegisterDto } from './dto';
import { JwtTokensService } from './jwt-tokens.service';
import { IAuthInterface } from './types';

@Injectable()
export class AuthService implements IAuthInterface {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly repository: AuthRepository,
    private readonly jwtTokenService: JwtTokensService,
  ) {}

  public async login(
    dto: LoginDto,
    res: FastifyReply,
  ): Promise<{ id: number; email: string; role: string } | void> {
    const user = await this.repository.getUserByEmail(dto.email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      throw new BadRequestException('Incorrect password');
    }

    try {
      const tokens = await this.jwtTokenService.signTokens(
        user.id,
        user.email,
        user.role,
      );

      await Promise.all([
        this.jwtTokenService.updateRtHash(user.id, tokens.refreshToken),
        this.jwtTokenService.putTokensToCookies(
          user.id,
          user.email,
          user.role,
          res,
        ),
      ]);

      return { id: user.id, email: user.email, role: user.role };
    } catch (error) {
      this.logger.error('Error signing tokens', error, { user });
      throw new UnprocessableEntityException(
        'An unexpected error occurred. Please try again later.',
      );
    }
  }

  public async register(dto: RegisterDto, res: FastifyReply): Promise<any> {
    const user = await this.repository.getUserByEmail(dto.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.hashData(dto.password);

    const newUser = await this.repository.createUser(dto, hashedPassword);

    if (!newUser) throw new BadRequestException('Error creating user');

    const tokens = await this.jwtTokenService.signTokens(
      newUser.id,
      newUser.email,
      newUser.role,
    );

    await this.jwtTokenService.updateRtHash(newUser.id, tokens.refreshToken);
    await this.jwtTokenService.putTokensToCookies(
      newUser.id,
      newUser.email,
      newUser.role,
      res,
    );
  }

  public async hashData(data: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(data, saltOrRounds);
  }

  getUserData(
    id: number,
    email: string,
  ): Promise<{ id: number; email: string }> {
    return Promise.resolve({ email: email, id: id });
  }
}
