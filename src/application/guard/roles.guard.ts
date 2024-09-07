import { RoleType } from '@interfaces/types';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(
      'roles',
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const cookies = request.cookies;
    const jwtToken = cookies['accessToken'];

    if (!jwtToken) {
      return false;
    }

    try {
      const decodedToken = this.jwtService.verify(jwtToken, {
        secret: process.env.ATSECRET,
      });
      const userRoles = decodedToken.role;

      return requiredRoles.some((role) => userRoles.includes(role));
    } catch (error) {
      return false;
    }
  }
}
