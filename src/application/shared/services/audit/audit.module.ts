import { AuditService } from '@libs/audit/audit.service';
import { Global, Module } from '@nestjs/common';
import { PrismaService } from '@shared/services/prisma/prisma.service';

@Global()
@Module({
  providers: [AuditService, PrismaService],
})
export class AuditModule {}
