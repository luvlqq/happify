import { UserController } from '@controllers/user.controller';
import { UserRepository } from '@infrastructure/database/repositories/user.repository';
import { WinstonLoggerModule } from '@libs';
import { PrismaService } from '@libs/prisma/prisma.service';
import { Module } from '@nestjs/common';

import { UserService } from './services/user.service';

@Module({
  imports: [WinstonLoggerModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
})
export class UserModule {}
