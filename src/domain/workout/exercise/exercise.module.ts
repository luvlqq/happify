import { ExerciseController } from '@controllers/exercise.controller';
import { ExerciseRepository } from '@infrastructure/database/repositories/exercise.repository';
import { Module } from '@nestjs/common';

import { ExerciseService } from './services/exercise.service';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, ExerciseRepository],
})
export class ExerciseModule {}
