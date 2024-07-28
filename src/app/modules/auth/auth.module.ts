import { AuditService } from '@libs/audit/audit.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtAuthGuard, JwtRefreshGuard } from './guard';
import { IsPremiumUserGuard } from './guard/isPremiumUser.guard';
import { JwtTokensService } from './jwt-tokens.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    JwtTokensService,
    AtStrategy,
    RtStrategy,
    JwtAuthGuard,
    JwtRefreshGuard,
    IsPremiumUserGuard,
    AuditService,
  ],
})
export class AuthModule {}
