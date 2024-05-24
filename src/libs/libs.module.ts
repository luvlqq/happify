import { Module } from '@nestjs/common';

import {
  AwsModule,
  LocalCacheModule,
  OpenaiModule,
  PrismaModule,
  QueueModule,
  StripeModule,
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
  ],
})
export class LibsModule {}
