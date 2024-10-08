import { MealService } from '@domain/meal/meal/services/meal.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Meals')
@Controller('meals')
export class MealController {
  constructor(private readonly mealsService: MealService) {}

  @Get()
  public async getAllMeals(): Promise<string[]> {
    return ['Hello World!'];
  }

  @Get(':id')
  public async getMealById(): Promise<string> {
    return 'Hello World!';
  }

  @Get('share-meal/:id')
  public async getShareMeal(): Promise<string> {
    return 'Hello World!';
  }

  @Get('meal-ingredients/:id')
  public async getMealIngredients(): Promise<string> {
    return 'Hello World!';
  }

  @Get('meal-nutrition/:id')
  public async getMealNutrition(): Promise<string> {
    return 'Hello World!';
  }

  @Get('meal-reviews/:id')
  public async getMealReviews(): Promise<string> {
    return 'Hello World!';
  }

  @Get('meal-ratings/:id')
  public async getMealRatings(): Promise<string> {
    return 'Hello World!';
  }

  @Get('meal-comments/:id')
  public async getMealComments(): Promise<string> {
    return 'Hello World!';
  }
}
