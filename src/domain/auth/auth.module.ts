import { AuditService } from '@libs/audit/audit.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from '../../application/controllers/auth.controller';
import { JwtAuthGuard, JwtRefreshGuard } from './guard';
import { IsPremiumUserGuard } from './guard/isPremiumUser.guard';
import { AuthRepository } from './repositories/auth.repository';
import { AuthService } from './services/auth.service';
import { JwtTokensService } from './services/jwt-tokens.service';
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
