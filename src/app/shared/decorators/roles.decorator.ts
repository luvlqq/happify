import { SetMetadata } from '@nestjs/common';
import { RoleType } from '@shared/types';

/**
 * Role decorator
 *
 * @param {Roles[]} roles - An array of roles that are allowed to access the route or method.
 * The roles are defined in the RoleType enum. For example, Roles.USER, Roles.ADMIN, etc.
 *
 * @returns A decorator that can be used to restrict access to routes or methods based on the roles of the user.
 *
 * @example
 * ㅤ@Role(Roles.ADMIN)
 * getAdminData() {
 *   // This method can only be accessed by users with the ADMIN role.
 * }
 */
export const Role = (...roles: RoleType[]) => SetMetadata('roles', roles);
