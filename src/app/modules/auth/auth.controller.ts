import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FastifyReply } from 'fastify';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { AuthSwaggerLogin, AuthSwaggerRegister } from './swagger';
import { IAuthInterface } from './types';

@ApiTags('Auth')
@Controller('auth')
export class AuthController implements IAuthInterface {
  constructor(private readonly authService: AuthService) {}

  @AuthSwaggerRegister()
  @HttpCode(204)
  @Post('register')
  public async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<void> {
    await this.authService.register(dto, response);
  }

  @AuthSwaggerLogin()
  @HttpCode(204)
  @Post('login')
  public async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<void> {
    await this.authService.login(dto, response);
  }
}
