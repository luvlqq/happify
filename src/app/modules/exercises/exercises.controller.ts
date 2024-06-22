import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ExercisesService } from './exercises.service';

@ApiTags('Exercises')
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  public async getAllExercises(): Promise<string[]> {
    return ['Hello World!'];
  }

  @Get(':id')
  public async getExerciseById(): Promise<string> {
    return 'Hello World!';
  }

  @Post('add-exercise-to-favorite/:id')
  public async addExerciseToFavorite(): Promise<string> {
    return 'Hello World!';
  }

  @Post('remove-exercise-from-favorite/:id')
  public async removeExerciseFromFavorite(): Promise<string> {
    return 'Hello World!';
  }

  @Post('like-exercise/:id')
  public async likeExercise(): Promise<string> {
    return 'Hello World!';
  }

  @Post('unlike-exercise/:id')
  public async unlikeExercise(): Promise<string> {
    return 'Hello World!';
  }

  // share-exercise link will be generated and returned
  @Get('share-exercise/:id')
  public async getShareExercises(): Promise<string> {
    return 'Hello World!';
  }

  @Post('create-own-exercise')
  public async reportExercise(): Promise<string> {
    return 'Hello World!';
  }

  @Post()
  public async createExercise(): Promise<string> {
    return 'Hello World!';
  }

  @Patch(':id')
  public async updateExercise(): Promise<string> {
    return 'Hello World!';
  }

  @Delete(':id')
  public async deleteExercise(): Promise<string> {
    return 'Hello World!';
  }
}
