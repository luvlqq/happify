import { LibsModule } from '@libs/libs.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';
import { HttpExceptionFilter } from '@shared/exceptions';
import { LoggingInterceptor } from '@shared/interceptors';

import { AppController } from './app.controller';
import { AuthModule } from '@modules/auth/auth.module';
import { ExercisesModule } from '@modules/exercises/exercises.module';
import { MealsModule } from '@modules/meals/meals.module';
import { NotificationsModule } from '@modules/notifications/notifications.module';
import { NutritionModule } from '@modules/nutrition/nutrition.module';
import { UsersModule } from '@modules/users/users.module';
import { WorkoutsModule } from '@modules/workouts/workouts.module';

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
