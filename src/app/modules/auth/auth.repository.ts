import { PrismaService } from '@libs/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { RegisterDto } from './dto';
import { IAuthRepositoryInterface } from './types';
import { User } from '.prisma/client';

@Injectable()
export class AuthRepository implements IAuthRepositoryInterface {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly prisma: PrismaService,
  ) {}

  public async getUserById(id: number): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({ where: { id: id } });
    } catch (error) {
      this.logger.error('Error getting user', error, { id });
      throw new Error('Error getting user');
    }
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({ where: { email: email } });
    } catch (error) {
      this.logger.error('Error getting user', error, { email });
      throw new Error('Error getting user');
    }
  }

  public async createUser(
    dto: RegisterDto,
    hashPassword: string,
  ): Promise<User | null> {
    try {
      return await this.prisma.user.create({
        data: { ...dto, password: hashPassword },
      });
    } catch (error) {
      this.logger.error('Error creating user', error, { dto });
      throw new Error('Error creating user');
    }
  }

  public async updateRtHash(userId: number, hash: string): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashRt: hash,
      },
    });
  }
}
