import { NotificationsController } from '@controllers/notifications.controller';
import { Module } from '@nestjs/common';

import { NotificationsService } from './notifications.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
