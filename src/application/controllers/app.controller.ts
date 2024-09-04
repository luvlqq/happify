import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisOptions, Transport } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  MicroserviceHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from '@libs/prisma/prisma.service';

@ApiTags('Health')
@Controller('health')
export class AppController {
  constructor(
    private health: HealthCheckService,
    private prismaHealthIndicator: PrismaHealthIndicator,
    private memoryHealthIndicator: MemoryHealthIndicator,
    private prismaService: PrismaService,
    private microservice: MicroserviceHealthIndicator,
    private readonly config: ConfigService,
  ) {}

  @Get()
  @HealthCheck()
  public async getHealth() {
    return this.health.check([
      async () =>
        await this.prismaHealthIndicator.pingCheck(
          'database',
          this.prismaService,
        ),
      async () =>
        await this.memoryHealthIndicator.checkHeap(
          'memory heap',
          300 * 1024 * 1024,
        ),
      async () =>
        await this.microservice.pingCheck<RedisOptions>('redis', {
          transport: Transport.REDIS,
          options: {
            host: this.config.get('REDIS_HOST'),
            port: this.config.get('REDIS_PORT'),
          },
        }),
    ]);
  }
}
