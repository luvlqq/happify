import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const getUserEmail = createParamDecorator(
  (data: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    return request.user['email'];
  },
);
