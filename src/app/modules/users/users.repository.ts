import { PrismaService } from '@libs/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { UserHealthData } from './dto';
import { User } from '.prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Fetches user data based on provided email or id.
   *
   * @param {string | number} data - The email or id of the user.
   *
   * @returns {Promise<User | null>} A promise that resolves to the User object if found, or null if not found.
   * If neither email nor id is provided, it throws an error.
   *
   * @throws {Error} Will throw an error if neither email nor id is provided.
   *
   * @example
   * const userData = await getUserData('test@example.com');
   * const userData = await getUserData(123);
   */
  public async getUserData(data: string | number): Promise<User | null> {
    const uniqueField =
      typeof data === 'string' ? { email: data } : { id: data };
    if (!uniqueField) throw new Error('Incorrect data provided');

    return this.prisma.user.findUnique({ where: uniqueField });
  }

  public async getAllUsers() {
    return this.prisma.user.findMany();
  }

  //todo: create a new field in db for set user birth date and a new field for user age.
  public async setHealthData(id: number, dto: UserHealthData) {
    return this.prisma.userHealthData.create({
      data: {
        ...dto,
      },
    });
  }
}
