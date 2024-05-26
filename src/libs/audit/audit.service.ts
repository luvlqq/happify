import { AuditAction } from '@libs/audit/types';
import { PrismaService } from '@libs/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Audit } from '@prisma/client';

@Injectable()
export class AuditService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Create audit log
   * @param action from Action enum CREATE, UPDATE, DELETE, ERROR
   * @param data string
   * @returns
   */
  public async createAuditLog(
    action: AuditAction,
    data: string,
  ): Promise<Audit> {
    return this.prismaService.audit.create({
      data: {
        action: action,
        text: data,
      },
    });
  }
}
