import { CreateExerciseDto } from '@interfaces/dto/create-exercise.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { ExerciseRepository } from './exercise.repository';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly repository: ExerciseRepository,
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
