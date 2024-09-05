import { UpdateUserHealthData } from '@interfaces/dto/user.health.dto';
import { UserHealthData } from '@prisma/client';

import { User } from '.prisma/client';

export interface UserRepositoryInterface {
  getUserData(
    data: string | number,
    healthDataOnly: boolean,
  ): Promise<User | UserHealthData | null>;
  getAllUsers(): Promise<Pick<User, 'id' | 'firstName' | 'lastName'>[]>;
  setHealthData(
    id: number,
    dto: UserHealthData,
    age: number,
    bmi: number,
  ): Promise<UserHealthData>;
  updateHealthData(
    id: number,
    dto: UpdateUserHealthData,
  ): Promise<UserHealthData>;
  deleteUserHealthData(id: number): Promise<UserHealthData>;
}
