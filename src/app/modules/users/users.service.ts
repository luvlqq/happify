import { UsersRepository } from '@modules/users/users.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { calculateUserAge, calculateUserBmi } from '@utils/utils';

import { UserHealthData } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  public async getUsers(): Promise<User[] | null> {
    try {
      return this.repository.getAllUsers();
    } catch (e) {
      throw new BadRequestException('Error getting users');
    }
  }

  public async getUser(id: number): Promise<User | null> {
    try {
      const user = await this.repository.getUserData(id);
      // delete user['password'];
      return user;
    } catch (e) {
      throw new BadRequestException('Error getting user');
    }
  }

  public async getUserHealthData(id: number): Promise<User | null> {
    try {
      const userHealthData = await this.repository.getUserData(id);

      // todo: return only health data smth like this userHealthData.healthData
      return userHealthData;
    } catch (e) {
      throw new BadRequestException('Error getting user health data');
    }
  }

  public async setUserHealthData(id: number, dto: UserHealthData) {
    try {
      const { age, weight, height } = dto;

      //todo: refactor prisma model for include this 2 fields
      const userAge = await calculateUserAge(age);
      const userBmi = await calculateUserBmi(weight, height);

      return await this.repository.setHealthData(id, dto);
    } catch (e) {
      throw new BadRequestException('Error setting user health data');
    }
  }

  public async updateUserHealthData() {}

  public async deleteUserHealthData() {}

  public async getUserActivityData() {
    return 'user activity data';
  }

  public async getUserWorkoutData() {
    return 'user workout data';
  }
}
