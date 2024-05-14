import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { HttpExceptionFilter } from './app/exceptionFilters';
import { LoggingInterceptor } from './app/interceptors';
import { AuthModule } from './app/modules/auth/auth.module';
import { ExercisesModule } from './app/modules/exercises/exercises.module';
import { MealsModule } from './app/modules/meals/meals.module';
import { NotificationsModule } from './app/modules/notifications/notifications.module';
import { NutritionModule } from './app/modules/nutrition/nutrition.module';
import { UsersModule } from './app/modules/users/users.module';
import { WorkoutsModule } from './app/modules/workouts/workouts.module';
import { LibsModule } from './libs/libs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    WorkoutsModule,
    ExercisesModule,
    NutritionModule,
    MealsModule,
    NotificationsModule,
    TerminusModule,
    HttpModule,
    LibsModule,
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
  ],
})
export class AppModule {}
