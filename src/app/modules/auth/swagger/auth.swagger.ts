import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ErrorType } from '@shared/types';

import { LoginDto, RegisterDto } from '../dto';

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
