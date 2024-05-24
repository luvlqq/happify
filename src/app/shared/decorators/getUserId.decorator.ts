import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * getUserData decorator for getting user data from request
 * @param data for userId is - 'sub', email is - 'email' etc.
 * @param context
 * @returns
 */
export const getUserData = createParamDecorator<string | number>(
  (data: string | number, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user[data];
  },
);
