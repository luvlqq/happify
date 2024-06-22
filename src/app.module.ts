import { LibsModule } from '@libs/libs.module';
import { AuthModule } from '@modules/auth/auth.module';
import { RolesGuard } from '@modules/auth/guard/roles.guard';
import { ExercisesModule } from '@modules/exercises/exercises.module';
import { MealsModule } from '@modules/meals/meals.module';
import { NotificationsModule } from '@modules/notifications/notifications.module';
import { NutritionModule } from '@modules/nutrition/nutrition.module';
import { UsersModule } from '@modules/users/users.module';
import { WorkoutsModule } from '@modules/workouts/workouts.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { HttpExceptionFilter } from '@shared/exceptions';
import { LoggingInterceptor } from '@shared/interceptors';

import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({}),
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
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
