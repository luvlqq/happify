import { DifficultyLevels, MuscleGroup, Place } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  image?: string;

  @IsString()
  video?: string;

  @IsString()
  description: string;

  @IsString()
  instructions: string;

  @IsEnum(DifficultyLevels)
  difficulty: DifficultyLevels;

  @IsEnum(MuscleGroup)
  groupOfMuscles: MuscleGroup;

  @IsNumber()
  repeats?: number;

  @IsNumber()
  sets?: number;

  @IsNumber()
  duration: number;

  @IsBoolean()
  equipment: boolean;

  @IsArray()
  place: Place;

  @IsNumber()
  rating: number;

  @IsNumber()
  likes: number;

  @IsNumber()
  dislikes: number;
}
