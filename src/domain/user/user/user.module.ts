import { Module } from '@nestjs/common';
import { WinstonLoggerModule } from '@shared/services';
import { PrismaService } from '@shared/services/prisma/prisma.service';

import { UserController } from '../../../application/controllers/user.controller';
import { UserRepository } from '@infrastructure/database/repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [WinstonLoggerModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
})
export class UserModule {}
