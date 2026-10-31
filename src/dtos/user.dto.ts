export const USER_ROLES = ['estudiante', 'docente', 'administrador'] as const;
export const USER_STATUSES = ['activo', 'inactivo', 'suspendido'] as const;

export type UserRole = (typeof USER_ROLES)[number];
export type UserStatus = (typeof USER_STATUSES)[number];

export interface ICreateUserDTO {
  name: string;
  email: string;
  role: UserRole;
}

// PATCH: todos los campos son opcionales, pero debe llegar al menos uno.
export interface IUpdateUserDTO {
  role?: UserRole;
  status?: UserStatus;
  password?: string;
}