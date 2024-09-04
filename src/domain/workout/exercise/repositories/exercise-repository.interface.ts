import { CreateExerciseDto } from '@interfaces/dto/create-exercise.dto';
import { Exercise } from '@prisma/client';

export interface ExerciseRepositoryInterface {
  getAllExercises(): Promise<Exercise[]>;
  getExerciseById(id: number): Promise<Exercise | null>;
  createExercise(dto: CreateExerciseDto): Promise<Exercise>;
  updateExercise(id: number, dto: CreateExerciseDto): Promise<Exercise>;
  deleteExercise(id: number): Promise<Exercise>;
}
