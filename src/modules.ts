import { AuthModule } from '@domain/auth/auth.module';
import { MealModule } from '@domain/meal/meal/meal.module';
import { NutritionModule } from '@domain/meal/nutrition/nutrition.module';
import { JournalModule } from '@domain/user/journal/journal.module';
import { UserModule } from '@domain/user/user/user.module';
import { ExerciseModule } from '@domain/workout/exercise/exercise.module';
import { WorkoutModule } from '@domain/workout/workout/workout.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { LibsModule } from '@libs/libs.module';
import { NotificationsModule } from '@libs/notification/notifications.module';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';

export const UsersModules = [
  AuthModule,
  UserModule,
  WorkoutModule,
  ExerciseModule,
  NutritionModule,
  MealModule,
  JournalModule,
];
export const ApplicationsModules = [LibsModule, NotificationsModule];
export const InfrastructureModules = [
  DatabaseModule,
  TerminusModule,
  HttpModule,
];
