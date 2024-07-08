import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserData, Role } from '@shared/decorators';
import { Roles } from '@shared/types';
import { FastifyReply } from 'fastify';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { JwtAuthGuard } from './guard';
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
    @Res() response: FastifyReply,
  ): Promise<void> {
    await this.authService.register(dto, response);
    return response.send(204);
  }

  @AuthSwaggerLogin()
  @HttpCode(204)
  @Post('login')
  public async login(
    @Body() dto: LoginDto,
    @Res() response: FastifyReply,
  ): Promise<void> {
    await this.authService.login(dto, response);
    return response.send(204);
  }

  @UseGuards(JwtAuthGuard)
  @Role(Roles.USER)
  @Get('user-data')
  public async getUserData(
    @GetUserData('sub') id: number,
    @GetUserData('email') email: string,
  ): Promise<{ id: number; email: string }> {
    return { id: id, email: email };
  }

  @UseGuards(JwtAuthGuard)
  @Role(Roles.USER)
  @Version('2')
  @Get('user-data')
  public async getUserData2(
    @GetUserData('email') email: string,
  ): Promise<{ email: string }> {
    return { email: email };
  }
}
