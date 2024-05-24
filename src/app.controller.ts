import { PrismaService } from '@libs/prisma/prisma.service';
import { Controller, Get } from '@nestjs/common';
import { RedisOptions, Transport } from '@nestjs/microservices';
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  MicroserviceHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class AppController {
  constructor(
    private health: HealthCheckService,
    private prismaHealthIndicator: PrismaHealthIndicator,
    private memoryHealthIndicator: MemoryHealthIndicator,
    private prismaService: PrismaService,
    private microservice: MicroserviceHealthIndicator,
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
            host: 'localhost',
            port: 6379,
          },
        }),
    ]);
  }
}
