import { Request, Response, NextFunction } from 'express';
import { ICreateEquipmentDTO, IUpdateEquipmentDTO, EQUIPMENT_STATUSES } from '../dtos/equipment.dto';
import { hasOnlyKeys, isNonEmptyString, isOneOf, isPositiveInteger, isRecord } from '../utils/validation';

const isCreateEquipmentDTO = (value: unknown): value is ICreateEquipmentDTO => {
    if (!isRecord(value)) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['name', 'type', 'roomId']) &&
        isNonEmptyString(value.name) &&
        isNonEmptyString(value.type) &&
        isPositiveInteger(value.roomId)
    );
};

const isUpdateEquipmentDTO = (value: unknown): value is IUpdateEquipmentDTO => {
    if (!isRecord(value) || Object.keys(value).length === 0) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['name', 'type', 'status', 'roomId']) &&
        (value.name === undefined || isNonEmptyString(value.name)) &&
        (value.type === undefined || isNonEmptyString(value.type)) &&
        (value.status === undefined || isOneOf(value.status, EQUIPMENT_STATUSES)) &&
        (value.roomId === undefined || isPositiveInteger(value.roomId))
    );
};

export const validateCreateEquipmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateEquipmentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del equipo inválidos.'
        });
        return;
    }
    next();
};

export const validateUpdateEquipmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isUpdateEquipmentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos de actualización del equipo inválidos.'
        });
        return;
    }
    next();
};