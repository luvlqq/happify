import { RegisterDto } from '@interfaces/dto/register.dto';

export interface IAuthRepositoryInterface {
  createUser(dto: RegisterDto, hashPassword: string): Promise<any>;
  getUserById(id: number): Promise<any>;
  getUserByEmail(email: string): Promise<any>;
  updateRtHash(userId: number, hash: string): Promise<any>;
}
