import { RolesGuard } from '@application/guard/roles.guard';
import { AppController } from '@controllers/app.controller';
import { LibsModule } from '@libs/libs.module';
import { NotificationsModule } from '@libs/notification/notifications.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { HttpExceptionFilter } from 'src/application/exceptions';
import { LoggingInterceptor } from 'src/application/interceptors';

import { UsersModules } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({}),
    TerminusModule,
    HttpModule,
    NotificationsModule,
    LibsModule,
    ...UsersModules,
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
