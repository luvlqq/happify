import { AuthModule } from '@modules/auth/auth.module';
import { ExercisesModule } from '@modules/exercises/exercises.module';
import { JournalModule } from '@modules/journal/journal.module';
import { MealsModule } from '@modules/meals/meals.module';
import { NutritionModule } from '@modules/nutrition/nutrition.module';
import { UsersModule } from '@modules/users/users.module';
import { WorkoutsModule } from '@modules/workouts/workouts.module';

export const UsersModules = [
  AuthModule,
  UsersModule,
  WorkoutsModule,
  ExercisesModule,
  NutritionModule,
  MealsModule,
  JournalModule,
];
