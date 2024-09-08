import { appendCurrentDateToFile } from '@application/utils';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { Readable } from 'stream';

@Injectable()
export class AwsService {
  constructor(private readonly config: ConfigService) {}

  AWS_S3_BUCKET = this.config.get<string>('AWS_S3_BUCKET')!;
  s3 = new AWS.S3({
    accessKeyId: this.config.get<string>('ACCESS_KEY_ID'),
    secretAccessKey: this.config.get<string>('SECRET_ACCESS_KEY'),
    endpoint: this.config.get<string>('ENDPOINT_URL'),
  });

  public async uploadFile(file, userData?: string): Promise<string> {
    if (!file || !file.buffer) {
      throw new Error('File or file buffer is not valid');
    }

    const fileBuffer = Buffer.from(file.buffer);
    const media = {
      mimeType: file.mimetype,
      body: Readable.from([fileBuffer]),
    };

    const fileNameWithDate = userData
      ? await appendCurrentDateToFile(file.originalname, userData)
      : await appendCurrentDateToFile(file.originalname);

    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.AWS_S3_BUCKET,
      Key: fileNameWithDate,
      Body: media.body,
      ContentType: media.mimeType,
      ACL: 'public-read',
    };

    try {
      const uploadResult = await this.s3.upload(params).promise();
      return uploadResult.Location;
    } catch (error) {
      console.error('Upload error:', error);
      throw new Error('File upload failed');
    }
  }
}
