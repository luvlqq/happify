import { LibsModule } from '@libs/libs.module';
import { RolesGuard } from '@modules/auth/guard/roles.guard';
import { NotificationsModule } from '@modules/notifications/notifications.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { HttpExceptionFilter } from '@shared/exceptions';
import { LoggingInterceptor } from '@shared/interceptors';

import { AppController } from './app.controller';
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
