export const AuditActions = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

export type AuditAction = keyof typeof AuditActions;
