import { UserRepository } from '@infrastructure/database/repositories/user.repository';
import { UpdateUserHealthData } from '@interfaces/dto/user.health.dto';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User, UserHealthData } from '@prisma/client';
import { calculateUserAge, calculateUserBmi } from '@utils/utils';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class UserService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly repository: UserRepository,
  ) {}

  public async getUsers(): Promise<
    Pick<User, 'id' | 'firstName' | 'lastName'>[] | null
  > {
    try {
      return this.repository.getAllUsers();
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Error getting users');
    }
  }

  public async getUser(id: number): Promise<User | UserHealthData | null> {
    try {
      const user = await this.repository.getUserData(id);
      // TODO: delete user password from res
      // delete user['password'];
      return user;
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Error getting user');
    }
  }

  public async getUserHealthData(
    id: number,
  ): Promise<User | UserHealthData | null> {
    try {
      return await this.repository.getUserData(id, true);
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Error getting user health data');
    }
  }

  public async setUserHealthData(
    id: number,
    dto: UserHealthData,
  ): Promise<UserHealthData> {
    try {
      const userAge = await calculateUserAge(dto.dateOfBirth);
      const userBmi = await calculateUserBmi(dto.weight, dto.height);

      return await this.repository.setHealthData(id, dto, userAge, userBmi);
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Error setting user health data');
    }
  }

  public async updateUserHealthData(
    id: number,
    dto: UpdateUserHealthData,
  ): Promise<UserHealthData> {
    try {
      return this.repository.updateHealthData(id, dto);
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Error while update user health data');
    }
  }

  public async deleteUserHealthData(id: number): Promise<UserHealthData> {
    try {
      return this.repository.deleteUserHealthData(id);
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Error while delete user health data');
    }
  }

  public async getUserActivityData() {
    return 'user activity data';
  }

  public async getUserWorkoutData() {
    return 'user workout data';
  }
}
