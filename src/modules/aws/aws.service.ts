import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsService {
  constructor(private readonly config: ConfigService) {}

  AWS_S3_BUCKET = this.config.get('AWS_S3_BUCKET');
  s3 = new AWS.S3({
    accessKeyId: this.config.get('ACCESS_KEY_ID'),
    secretAccessKey: this.config.get('SECRET_ACCESS_KEY'),
  });

  async connectionTest() {
    // const res = this.s3.;
    // console.log('res', res);
  }
}
