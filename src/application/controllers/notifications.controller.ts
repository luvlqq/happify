import { NotificationsService } from '@libs/notification/notifications.service';
import { Controller } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
}
