import { Module } from '@nestjs/common';

import { MealController } from '../../../application/controllers/meal.controller';
import { MealService } from './services/meal.service';

@Module({
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
