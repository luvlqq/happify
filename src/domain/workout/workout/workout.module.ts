import { WorkoutController } from '@controllers/workout.controller';
import { Module } from '@nestjs/common';

import { WorkoutService } from './services/workout.service';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
