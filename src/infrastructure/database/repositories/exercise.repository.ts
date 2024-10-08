import { ExerciseRepositoryInterface } from '@domain/workout/exercise/repositories/exercise-repository.interface';
import { CreateExerciseDto } from '@interfaces/dto/create-exercise.dto';
import { PrismaService } from '@libs/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';

@Injectable()
export class ExerciseRepository implements ExerciseRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllExercises(): Promise<Exercise[]> {
    return this.prisma.exercise.findMany();
  }

  public async getExerciseById(id: number): Promise<Exercise | null> {
    return this.prisma.exercise.findUnique({ where: { id: id } });
  }

  // public async addExerciseToFavorite(exerciseId: number, userId: number) {
  //   return this.prisma.
  // }

  public async createExercise(dto: CreateExerciseDto): Promise<Exercise> {
    return this.prisma.exercise.create({ data: { ...dto } });
  }

  public async updateExercise(
    id: number,
    dto: CreateExerciseDto,
  ): Promise<Exercise> {
    return this.prisma.exercise.update({ where: { id: id }, data: { ...dto } });
  }

  public async deleteExercise(id: number): Promise<Exercise> {
    return this.prisma.exercise.delete({ where: { id: id } });
  }
}
