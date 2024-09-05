import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { BackupsService } from './backups.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [BackupsService],
})
export class BackupsModule {}
