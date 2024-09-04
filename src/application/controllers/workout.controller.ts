import { WorkoutService } from '@domain/workout/workout/services/workout.service';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Workouts')
@Controller('workouts')
export class WorkoutController {
  constructor(private readonly workoutsService: WorkoutService) {}

  @Get()
  public async getAllWorkouts(): Promise<string[]> {
    return ['Hello World!'];
  }

  @Get(':id')
  public async getWorkoutById(): Promise<string> {
    return 'Hello World!';
  }

  @Get('share-workout/:id')
  public async getShareWorkout(): Promise<string> {
    return 'Hello World!';
  }

  @Post('create-workout')
  public async createWorkout(): Promise<string> {
    return 'Hello World!';
  }

  @Post('like-workout/:id')
  public async likeWorkout(): Promise<string> {
    return 'Hello World!';
  }

  @Post('unlike-workout/:id')
  public async unlikeWorkout(): Promise<string> {
    return 'Hello World!';
  }

  @Post('add-workout-to-favorite/:id')
  public async addWorkoutToFavorite(): Promise<string> {
    return 'Hello World!';
  }

  @Post('remove-workout-from-favorite/:id')
  public async removeWorkoutFromFavorite(): Promise<string> {
    return 'Hello World!';
  }

  @Post('report-workout')
  public async reportWorkout(): Promise<string> {
    return 'Hello World!';
  }

  @Get('workout-exercises/:id')
  public async getWorkoutExercises(): Promise<string> {
    return 'Hello World!';
  }

  @Delete(':id')
  public async deleteWorkout(): Promise<string> {
    return 'Hello World!';
  }

  @Patch(':id')
  public async updateWorkout(): Promise<string> {
    return 'Hello World!';
  }
}
