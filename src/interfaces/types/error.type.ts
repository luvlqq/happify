import { ApiProperty } from '@nestjs/swagger';

export class ErrorType {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  timestamp: string;
  @ApiProperty()
  path: string;
}
