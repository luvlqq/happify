import { LoginDto } from '@interfaces/dto/login.dto';
import { RegisterDto } from '@interfaces/dto/register.dto';
import { FastifyReply } from 'fastify';

export interface IAuthInterface {
  register(dto: RegisterDto, res: FastifyReply): Promise<void>;

  login(
    dto: LoginDto,
    reply: FastifyReply,
  ): Promise<{
    id: number;
    email: string;
    role: string;
    isPremium: boolean;
  } | void>;

  getUserData(
    id: number,
    email: string,
  ): Promise<{ id: number; email: string }>;
}
