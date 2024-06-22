import { AuditService } from '@libs/audit/audit.service';
import { PrismaService } from '@libs/prisma/prisma.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [AuditService, PrismaService],
})
export class AuditModule {}
