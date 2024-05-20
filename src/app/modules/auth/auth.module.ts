import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtAuthGuard, JwtRefreshGuard } from './guard';
import { JwtTokensService } from './jwt-tokens.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    JwtTokensService,
    AtStrategy,
    RtStrategy,
    JwtAuthGuard,
    JwtRefreshGuard,
  ],
})
export class AuthModule {}
