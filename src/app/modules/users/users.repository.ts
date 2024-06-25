import { PrismaService } from '@libs/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { UpdateUserHealthData, UserHealthData } from './dto';
import { User } from '.prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Fetches user data based on provided email or id.
   *
   * @param {string | number} data - The email or id of the user.
   *
   * @param {boolean} healthDataOnly - The flag for select user health data. Default value is false.
   *
   * @returns {Promise<User | null>} A promise that resolves to the User object if found, or null if not found.
   * If neither email nor id is provided, it throws an error.
   *
   * @throws {Error} Will throw an error if neither email nor id is provided.
   *
   * @example
   * const userData = await getUserData('test@example.com');
   * const userData = await getUserData(123);
   * const userHealthData = await getUserData(123, true);
   */
  public async getUserData(
    data: string | number,
    healthDataOnly: boolean = false,
  ): Promise<User | UserHealthData | null> {
    const uniqueField =
      typeof data === 'string' ? { email: data } : { id: data };
    if (!uniqueField) throw new Error('Incorrect data provided');

    if (healthDataOnly) {
      const result = await this.prisma.user.findUnique({
        where: uniqueField,
        select: { healthData: true },
      });

      return result?.healthData || null;
    } else {
      return this.prisma.user.findUnique({
        where: uniqueField,
        include: { healthData: true },
      });
    }
  }

  public async getAllUsers(): Promise<
    Pick<User, 'id' | 'firstName' | 'lastName'>[]
  > {
    return this.prisma.user.findMany({
      select: { id: true, firstName: true, lastName: true },
    });
  }

  public async setHealthData(
    id: number,
    dto: UserHealthData,
    age: number,
    bmi: number,
  ): Promise<UserHealthData> {
    return await this.prisma.userHealthData.create({
      data: {
        ...dto,
        age: age,
        BMI: bmi,
        userId: id,
      },
    });
  }

  public async updateHealthData(
    id: number,
    dto: UpdateUserHealthData,
  ): Promise<UserHealthData> {
    return await this.prisma.userHealthData.update({
      where: { userId: id },
      data: { ...dto },
    });
  }

  public async deleteUserHealthData(id: number): Promise<UserHealthData> {
    return this.prisma.userHealthData.delete({ where: { id: id } });
  }
}
