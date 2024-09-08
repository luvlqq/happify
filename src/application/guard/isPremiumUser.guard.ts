import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class IsPremiumUserGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const cookies = request.cookies;
    const jwtToken = cookies['accessToken'];

    const decodedToken = this.jwtService.verify(jwtToken, {
      secret: process.env.ATSECRET,
    });
    const userPremium = decodedToken.isPremium;

    if (userPremium === true) {
      return true;
    }

    throw new UnauthorizedException(
      'Only premium users can access this resource',
    );
  }
}
