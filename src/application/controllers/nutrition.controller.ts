import { NutritionService } from '@domain/meal/nutrition/services/nutrition.service';
import { Controller } from '@nestjs/common';

@Controller('nutrition')
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) {}
}
