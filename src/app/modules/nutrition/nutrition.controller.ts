import { Controller } from '@nestjs/common';

import { NutritionService } from './nutrition.service';

@Controller('nutrition')
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) {}
}
