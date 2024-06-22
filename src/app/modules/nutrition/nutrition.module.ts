import { Module } from '@nestjs/common';

import { NutritionController } from './nutrition.controller';
import { NutritionService } from './nutrition.service';

@Module({
  controllers: [NutritionController],
  providers: [NutritionService],
})
export class NutritionModule {}
