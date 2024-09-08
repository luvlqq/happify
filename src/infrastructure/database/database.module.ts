import { User } from '@domain/user/user/entities/user.entity';
import { UserHealth } from '@domain/user/user/entities/user-health.entity';
import { Audit } from '@libs/audit/entity/audit.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//todo: переписать с использованием ConfigService
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Audit, User, UserHealth],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
