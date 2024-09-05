import { PrismaService } from '@libs/prisma/prisma.service';
import { Global, Module } from '@nestjs/common';

import { AuditService } from './audit.service';

@Global()
@Module({
  providers: [AuditService, PrismaService],
})
export class AuditModule {}
