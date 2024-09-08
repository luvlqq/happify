import { HttpExceptionFilter } from '@application/exceptions';
import { RolesGuard } from '@application/guard/roles.guard';
import { LoggingInterceptor } from '@application/interceptors';
import { AppController } from '@controllers/app.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import {
  ApplicationsModules,
  InfrastructureModules,
  UsersModules,
} from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({}),
    ...UsersModules,
    ...InfrastructureModules,
    ...ApplicationsModules,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
