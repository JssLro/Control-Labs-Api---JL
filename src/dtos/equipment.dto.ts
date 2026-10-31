export const EQUIPMENT_STATUSES = ['operativo', 'en_mantenimiento', 'fuera_de_servicio'] as const;

export type EquipmentStatus = (typeof EQUIPMENT_STATUSES)[number];

export interface ICreateEquipmentDTO {
  name: string;
  type: string;
  roomId: number;
}

// PATCH: todos los campos son opcionales, pero debe llegar al menos uno.
export interface IUpdateEquipmentDTO {
  name?: string;
  type?: string;
  status?: EquipmentStatus;
  roomId?: number;
}