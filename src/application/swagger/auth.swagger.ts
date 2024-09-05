import { ErrorType } from '@application/types';
import { LoginDto } from '@interfaces/dto/login.dto';
import { RegisterDto } from '@interfaces/dto/register.dto';
import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function AuthSwaggerLogin() {
  return applyDecorators(
    ApiOperation({ summary: 'Login' }),
    ApiBody({ type: LoginDto }),
    ApiResponse({ status: 204, description: 'User logged in' }),
    ApiResponse({
      status: 404,
      description: 'User not found',
      type: ErrorType,
    }),
  );
}

export function AuthSwaggerRegister() {
  return applyDecorators(
    ApiOperation({ summary: 'Register' }),
    ApiBody({ type: RegisterDto }),
    ApiResponse({
      status: 204,
      description: 'User registered',
    }),
    ApiResponse({
      status: 400,
      description: 'User already exists',
      type: ErrorType,
    }),
  );
}
