import { Module } from '@nestjs/common';

import { NutritionController } from '../../../application/controllers/nutrition.controller';
import { NutritionService } from './services/nutrition.service';

@Module({
  controllers: [NutritionController],
  providers: [NutritionService],
})
export class NutritionModule {}
