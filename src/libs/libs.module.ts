import { Module } from '@nestjs/common';

import {
  AuditModule,
  AwsModule,
  LocalCacheModule,
  OpenaiModule,
  PrismaModule,
  QueueModule,
  StripeModule,
  TelegramModule,
  WinstonLoggerModule,
} from './index';

@Module({
  imports: [
    AwsModule,
    PrismaModule,
    StripeModule,
    WinstonLoggerModule,
    LocalCacheModule,
    QueueModule,
    OpenaiModule,
    AuditModule,
    TelegramModule,
  ],
})
export class LibsModule {}
