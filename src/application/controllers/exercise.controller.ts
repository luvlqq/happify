import { ExerciseService } from '@domain/workout/exercise/services/exercise.service';
import { CreateExerciseDto } from '@interfaces/dto/create-exercise.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Exercise } from '@prisma/client';
import { Role } from '@shared/decorators';
import { Roles } from '@shared/types';

@ApiTags('Exercises')
@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exercisesService: ExerciseService) {}

  @Get()
  public async getAllExercises(): Promise<Exercise[] | null> {
    return await this.exercisesService.getAllExercises();
  }

  @Get(':id')
  public async getExerciseById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Exercise | null> {
    return await this.exercisesService.getExerciseById(id);
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
  @Version('2')
  @Get('share-exercise/:id')
  public async getShareExercises(): Promise<string> {
    return 'Hello World!';
  }

  @Post('report-exercise')
  public async reportExercise(): Promise<string> {
    return 'Hello World!';
  }

  @Role(Roles.ADMIN)
  @Post('create')
  public async createExercise(
    @Body() dto: CreateExerciseDto,
  ): Promise<Exercise> {
    return await this.exercisesService.createExercise(dto);
  }

  @Role(Roles.ADMIN)
  @Patch(':id')
  public async updateExercise(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateExerciseDto,
  ): Promise<Exercise> {
    return await this.exercisesService.updateExercise(id, dto);
  }

  @Role(Roles.ADMIN)
  @Delete(':id')
  public async deleteExercise(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Exercise> {
    return await this.exercisesService.deleteExercise(id);
  }
}
