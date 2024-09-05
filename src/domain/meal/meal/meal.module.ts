import { MealController } from '@controllers/meal.controller';
import { Module } from '@nestjs/common';

import { MealService } from './services/meal.service';

@Module({
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
