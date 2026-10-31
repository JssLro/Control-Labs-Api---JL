import { Request, Response, NextFunction } from 'express';
import {
    ICreateIncidentDTO,
    IUpdateIncidentStatusDTO,
    INCIDENT_PRIORITIES,
    INCIDENT_STATUSES
} from '../dtos/incident.dto';
import { hasOnlyKeys, isNonEmptyString, isOneOf, isPositiveInteger, isRecord } from '../utils/validation';

const isCreateIncidentDTO = (value: unknown): value is ICreateIncidentDTO => {
    if (!isRecord(value)) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['description', 'priority', 'equipmentId', 'roomId']) &&
        isNonEmptyString(value.description) &&
        isOneOf(value.priority, INCIDENT_PRIORITIES) &&
        (value.equipmentId === undefined || isPositiveInteger(value.equipmentId)) &&
        (value.roomId === undefined || isPositiveInteger(value.roomId)) &&
        (value.equipmentId !== undefined || value.roomId !== undefined)
    );
};

const isUpdateIncidentStatusDTO = (value: unknown): value is IUpdateIncidentStatusDTO => {
    if (!isRecord(value)) {
        return false;
    }

    return hasOnlyKeys(value, ['status']) && isOneOf(value.status, INCIDENT_STATUSES);
};

export const validateCreateIncidentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateIncidentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos de la novedad inválidos.'
        });
        return;
    }
    next();
};

export const validateUpdateIncidentStatusPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isUpdateIncidentStatusDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Estado de la novedad inválido.'
        });
        return;
    }
    next();
};