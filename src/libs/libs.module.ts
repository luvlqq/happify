import { Module } from '@nestjs/common';

import { AwsModule } from './aws/aws.module';
import { PrismaModule } from './prisma/prisma.module';
import { StripeModule } from './stripe/stripe.module';
import { WinstonLoggerModule } from './winston/winston.module';

@Module({
  imports: [AwsModule, PrismaModule, StripeModule, WinstonLoggerModule],
})
export class LibsModule {}
