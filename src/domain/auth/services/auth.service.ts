import { AuthRepository } from '@infrastructure/database/repositories/auth.repository';
import { LoginDto } from '@interfaces/dto/login.dto';
import { RegisterDto } from '@interfaces/dto/register.dto';
import { AuditService } from '@libs/audit/services/audit.service';
import { AuditActions } from '@libs/audit/types';
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

import { IAuthInterface } from '../types';
import { JwtTokensService } from './jwt-tokens.service';

@Injectable()
export class AuthService implements IAuthInterface {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly repository: AuthRepository,
    private readonly jwtTokenService: JwtTokensService,
    private readonly audit: AuditService,
  ) {}

  public async login(
    dto: LoginDto,
    res: FastifyReply,
  ): Promise<{
    id: number;
    email: string;
    role: string;
    isPremium: boolean;
  } | void> {
    const user = await this.repository.getUserByEmail(dto.email);

    if (!user) {
      await this.audit.createAuditLog(
        AuditActions.ERROR,
        `User not found ${dto.email}`,
      );
      throw new NotFoundException('User not found');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      await this.audit.createAuditLog(
        AuditActions.ERROR,
        `Incorrect password ${dto.email}`,
      );
      throw new BadRequestException('Incorrect email or password');
    }

    try {
      const tokens = await this.jwtTokenService.signTokens(
        user.id,
        user.email,
        user.role,
        user.isPremium,
      );

      await this.jwtTokenService.updateRtHash(user.id, tokens.refreshToken);
      await this.jwtTokenService.putTokensToCookies(
        user.id,
        user.email,
        user.role,
        user.isPremium,
        res,
      );
      await this.audit.createAuditLog(
        AuditActions.SUCCESS,
        `User logged in ${user.email}`,
      );
      return {
        id: user.id,
        email: user.email,
        role: user.role,
        isPremium: user.isPremium,
      };
    } catch (error) {
      await this.audit.createAuditLog(
        AuditActions.ERROR,
        `Error signing tokens ${user.email}`,
      );
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

    if (!newUser) {
      await this.audit.createAuditLog(
        AuditActions.ERROR,
        `Error creating user ${dto.email}`,
      );
      throw new BadRequestException('Error creating user');
    }

    await this.audit.createAuditLog(
      AuditActions.CREATE,
      `User created ${dto.email}`,
    );
    const tokens = await this.jwtTokenService.signTokens(
      newUser.id,
      newUser.email,
      newUser.role,
      newUser.isPremium,
    );

    await this.jwtTokenService.updateRtHash(newUser.id, tokens.refreshToken);
    await this.jwtTokenService.putTokensToCookies(
      newUser.id,
      newUser.email,
      newUser.role,
      newUser.isPremium,
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
