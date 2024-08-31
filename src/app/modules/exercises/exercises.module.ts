import { ExercisesRepository } from '@modules/exercises/exercises.repository';
import { Module } from '@nestjs/common';

import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService, ExercisesRepository],
})
export class ExercisesModule {}
