import { JwtAuthGuard, JwtRefreshGuard } from '@application/guard';
import { IsPremiumUserGuard } from '@application/guard/isPremiumUser.guard';
import { AtStrategy, RtStrategy } from '@application/strategies';
import { AuthController } from '@controllers/auth.controller';
import { AuthRepository } from '@infrastructure/database/repositories/auth.repository';
import { AuditService } from '@libs/audit/services/audit.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './services/auth.service';
import { JwtTokensService } from './services/jwt-tokens.service';

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
