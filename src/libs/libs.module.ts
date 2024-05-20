import { Module } from '@nestjs/common';

import { AwsModule } from './aws/aws.module';
import { LocalCacheModule } from './cache/cache.module';
import { OpenaiModule } from './open-ai/openai.module';
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
    LocalCacheModule,
    QueueModule,
    OpenaiModule,
  ],
})
export class LibsModule {}
