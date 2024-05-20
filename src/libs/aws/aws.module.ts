import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AwsService } from './aws.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  providers: [AwsService],
})
export class AwsModule {}
