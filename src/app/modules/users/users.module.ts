import { WinstonLoggerModule } from '@libs';
import { PrismaService } from '@libs/prisma/prisma.service';
import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [WinstonLoggerModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PrismaService],
})
export class UsersModule {}
