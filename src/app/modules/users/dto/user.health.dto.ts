import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class UserHealthData {
  @ApiProperty()
  @IsString()
  dateOfBirth: string;

  @ApiProperty()
  @IsNumber()
  weight: number;

  @IsNumber()
  @ApiProperty()
  height: number;

  @ApiProperty()
  @IsEnum(Gender)
  gender: Gender;
}

export class UpdateUserHealthData extends PartialType(UserHealthData) {}
