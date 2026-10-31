export const INCIDENT_STATUSES = ['pendiente', 'en_proceso', 'resuelto'] as const;
export const INCIDENT_PRIORITIES = ['baja', 'media', 'critica'] as const;

export type IncidentStatus = (typeof INCIDENT_STATUSES)[number];
export type IncidentPriority = (typeof INCIDENT_PRIORITIES)[number];

// Debe venir equipmentId, roomId o ambos (la novedad se asocia a un equipo o a un ambiente).
export interface ICreateIncidentDTO {
  description: string;
  priority: IncidentPriority;
  equipmentId?: number;
  roomId?: number;
}

export interface IUpdateIncidentStatusDTO {
  status: IncidentStatus;
}