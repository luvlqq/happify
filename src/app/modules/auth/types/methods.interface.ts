import { FastifyReply } from 'fastify';

import { LoginDto, RegisterDto } from '../dto';

export interface IAuthInterface {
  register(dto: RegisterDto, res: FastifyReply): Promise<void>;
  login(
    dto: LoginDto,
    reply: FastifyReply,
  ): Promise<{ id: number; email: string; role: string } | void>;
}
