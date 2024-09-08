import { NutritionController } from '@controllers/nutrition.controller';
import { Module } from '@nestjs/common';

import { NutritionService } from './services/nutrition.service';

@Module({
  controllers: [NutritionController],
  providers: [NutritionService],
})
export class NutritionModule {}
