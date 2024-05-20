import { LibsModule } from '@libs/libs.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';
import { HttpExceptionFilter } from '@shared/exceptions';
import { LoggingInterceptor } from '@shared/interceptors';

import { AppController } from './app.controller';
import { AuthModule } from './app/modules/auth/auth.module';
import { ExercisesModule } from './app/modules/exercises/exercises.module';
import { MealsModule } from './app/modules/meals/meals.module';
import { NotificationsModule } from './app/modules/notifications/notifications.module';
import { NutritionModule } from './app/modules/nutrition/nutrition.module';
import { UsersModule } from './app/modules/users/users.module';
import { WorkoutsModule } from './app/modules/workouts/workouts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TerminusModule,
    HttpModule,
    AuthModule,
    UsersModule,
    WorkoutsModule,
    ExercisesModule,
    NutritionModule,
    MealsModule,
    NotificationsModule,
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
