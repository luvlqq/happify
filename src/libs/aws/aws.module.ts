import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AwsController } from './aws.controller';
import { AwsService } from './aws.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  controllers: [AwsController],
  providers: [AwsService],
})
export class AwsModule {}
