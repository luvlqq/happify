import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AwsService } from './aws.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  providers: [AwsService],
})
export class AwsModule {}
