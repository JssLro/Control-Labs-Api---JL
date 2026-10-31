export const ROOM_STATUSES = ['activo', 'inactivo', 'mantenimiento'] as const;

export type RoomStatus = (typeof ROOM_STATUSES)[number];

export interface ICreateRoomDTO {
  name: string;
  capacity: number;
  location: string;
}

// PATCH: todos los campos son opcionales, pero debe llegar al menos uno.
export interface IUpdateRoomDTO {
  name?: string;
  capacity?: number;
  location?: string;
  status?: RoomStatus;
}