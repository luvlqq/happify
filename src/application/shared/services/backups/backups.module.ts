import { BackupsService } from '@libs/backups/backups.service';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [BackupsService],
})
export class BackupsModule {}
