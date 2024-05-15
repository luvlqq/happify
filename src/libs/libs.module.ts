import { Module } from '@nestjs/common';

import { AwsModule } from './aws/aws.module';
import { CacheModule } from './cache/cache.module';
import { PrismaModule } from './prisma/prisma.module';
import { QueueModule } from './queue/queue.module';
import { StripeModule } from './stripe/stripe.module';
import { WinstonLoggerModule } from './winston/winston.module';

@Module({
  imports: [
    AwsModule,
    PrismaModule,
    StripeModule,
    WinstonLoggerModule,
    CacheModule,
    QueueModule,
  ],
})
export class LibsModule {}
