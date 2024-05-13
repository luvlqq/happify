import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { LoggingInterceptor } from './interceptors';
import { AuthModule } from './modules/auth/auth.module';
import { AwsModule } from './modules/aws/aws.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { MealsModule } from './modules/meals/meals.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
import { StripeModule } from './modules/stripe/stripe.module';
import { UsersModule } from './modules/users/users.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
    AwsModule,
    UsersModule,
    WorkoutsModule,
    ExercisesModule,
    NutritionModule,
    MealsModule,
    NotificationsModule,
    StripeModule,
    TerminusModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
