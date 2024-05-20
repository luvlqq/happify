import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';

import { PrismaService } from '@libs/prisma/prisma.service';

@Controller('health')
export class AppController {
  constructor(
    private health: HealthCheckService,
    private prismaHealthIndicator: PrismaHealthIndicator,
    private memoryHealthIndicator: MemoryHealthIndicator,
    private prismaService: PrismaService,
  ) {}

  @Get()
  @HealthCheck()
  public async getHealth() {
    return this.health.check([
      () =>
        this.prismaHealthIndicator.pingCheck('database', this.prismaService),
      () =>
        this.memoryHealthIndicator.checkHeap('memory heap', 300 * 1024 * 1024),
    ]);
  }
}
