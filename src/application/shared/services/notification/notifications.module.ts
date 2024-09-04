import { Module } from '@nestjs/common';

import { NotificationsController } from '../../../controllers/notifications.controller';
import { NotificationsService } from './notifications.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
