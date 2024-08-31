import { CreateExerciseDto } from '@modules/exercises/dto/create-exercise.dto';
import { ExercisesRepository } from '@modules/exercises/exercises.repository';
import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly repository: ExercisesRepository,
  ) {}

  public async getAllExercises(): Promise<Exercise[]> {
    return await this.repository.getAllExercises();
  }

  public async getExerciseById(id: number): Promise<Exercise | null> {
    return await this.repository.getExerciseById(id);
  }

  public async createExercise(dto: CreateExerciseDto): Promise<Exercise> {
    return await this.repository.createExercise(dto);
  }

  public async updateExercise(
    id: number,
    dto: CreateExerciseDto,
  ): Promise<Exercise> {
    return await this.repository.updateExercise(id, dto);
  }

  public async deleteExercise(id: number): Promise<Exercise> {
    return this.repository.deleteExercise(id);
  }
}
