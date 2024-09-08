export const Roles = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const;

export type RoleType = keyof typeof Roles;
