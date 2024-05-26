import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { FastifyReply } from 'fastify';

import { AuthRepository } from './auth.repository';
import { Tokens } from './types';

@Injectable()
export class JwtTokensService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly repository: AuthRepository,
    private readonly config: ConfigService,
  ) {}

  public async signToken(
    userId: number,
    email: string,
    role: string,
  ): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role,
        },
        {
          secret: this.configService.get<string>('ATSECRET'),
          expiresIn: this.configService.get<string>('ATEXPIREIN'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role,
        },
        {
          secret: this.configService.get<string>('RTSECRET'),
          expiresIn: this.configService.get<string>('RTEXPIREIN'),
        },
      ),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }

  public async tokenToCookie(
    res: FastifyReply | undefined,
    tokenType: 'accessToken' | 'refreshToken',
    token: string,
  ): Promise<void> {
    if (!res) throw new BadRequestException('Response is not defined');
    res.cookie(tokenType, token, {
      httpOnly: true,
      secure: true,
    });
  }

  public async refreshTokens(userId: number, rt: string): Promise<void> {
    const user = await this.repository.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User are not exist');
    }

    if (!user.hashRt) {
      throw new NotFoundException('No hash rt');
    }

    const rtMatches = await bcrypt.compare(rt, user.hashRt);
    if (!rtMatches) {
      throw new BadRequestException('Tokens are not the same!');
    }
    const tokens = await this.signTokens(user.id, user.email, user.role);
    await this.updateRtHash(user.id, tokens.refreshToken);
  }

  public async putTokensToCookies(
    userId: number,
    email: string,
    role: string,
    res?: FastifyReply,
  ): Promise<void> {
    const tokens = await this.signToken(userId, email, role);
    await this.tokenToCookie(res, 'accessToken', tokens.accessToken);
    await this.tokenToCookie(res, 'refreshToken', tokens.refreshToken);
    await this.refreshTokens(userId, tokens.refreshToken);
  }

  public async signTokens(
    userId: number,
    email: string,
    role: string,
  ): Promise<Tokens> {
    return this.signToken(userId, email, role);
  }

  public async updateRtHash(userId: number, rt: string): Promise<void> {
    const hash = await this.hashData(rt);
    await this.repository.updateRtHash(userId, hash);
  }

  public async hashData(data: string): Promise<string> {
    const saltOrRounds = this.config.get<number>('SALT_OR_ROUNDS') || 10;
    return await bcrypt.hash(data, saltOrRounds);
  }
}
