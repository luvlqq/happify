import { UsersRepository } from '@modules/users/users.repository';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  public async getUsers() {
    try {
      return this.repository.getAllUsers();
    } catch (e) {
      throw new BadRequestException('Error getting users');
    }
  }

  public async getUser(id: number) {
    try {
      const user = await this.repository.getUserData(id);
      // delete user['password'];
      return user;
    } catch (e) {
      throw new BadRequestException('Error getting user');
    }
  }

  public async getUserHealthData() {
    return 'user health data';
  }

  public async setUserHealthData() {}

  public async updateUserHealthData() {}

  public async deleteUserHealthData() {}

  public async getUserActivityData() {
    return 'user activity data';
  }

  public async getUserWorkoutData() {
    return 'user workout data';
  }

  private calculateUserAge() {}

  private calculateUserBmi() {}
}
