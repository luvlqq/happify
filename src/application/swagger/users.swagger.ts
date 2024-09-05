import { ErrorType } from '@application/types';
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function GetUserDataSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Get user data' }),
    ApiResponse({ status: 200, description: 'Getting user data' }),
    ApiResponse({
      status: 400,
      description: 'Bad request',
      type: ErrorType,
    }),
  );
}

export function SetterUserHealthDataSwagger(
  method: string,
  successStatus?: number,
) {
  return applyDecorators(
    ApiOperation({ summary: `${method} user health data` }),
    ApiResponse({
      status: successStatus || 200,
      description: `Data ${method}`,
    }),
    ApiResponse({
      status: 400,
      description: 'Bad request',
      type: ErrorType,
    }),
  );
}
