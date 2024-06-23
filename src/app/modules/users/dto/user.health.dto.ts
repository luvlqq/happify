import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class UserHealthData {
  @ApiProperty()
  @IsString()
  age: string;

  @ApiProperty()
  @IsNumber()
  weight: number;

  @IsNumber()
  @ApiProperty()
  height: number;

  gender: Gender;
}
