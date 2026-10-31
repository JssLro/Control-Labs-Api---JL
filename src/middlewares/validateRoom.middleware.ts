import { Request, Response, NextFunction } from 'express';
import { ICreateRoomDTO, IUpdateRoomDTO, ROOM_STATUSES } from '../dtos/room.dto';
import { hasOnlyKeys, isNonEmptyString, isOneOf, isPositiveInteger, isRecord } from '../utils/validation';

const isCreateRoomDTO = (value: unknown): value is ICreateRoomDTO => {
    if (!isRecord(value)) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['name', 'capacity', 'location']) &&
        isNonEmptyString(value.name) &&
        isPositiveInteger(value.capacity) &&
        isNonEmptyString(value.location)
    );
};

const isUpdateRoomDTO = (value: unknown): value is IUpdateRoomDTO => {
    if (!isRecord(value) || Object.keys(value).length === 0) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['name', 'capacity', 'location', 'status']) &&
        (value.name === undefined || isNonEmptyString(value.name)) &&
        (value.capacity === undefined || isPositiveInteger(value.capacity)) &&
        (value.location === undefined || isNonEmptyString(value.location)) &&
        (value.status === undefined || isOneOf(value.status, ROOM_STATUSES))
    );
};

export const validateCreateRoomPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateRoomDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del ambiente inválidos.'
        });
        return;
    }
    next();
};

export const validateUpdateRoomPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isUpdateRoomDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos de actualización del ambiente inválidos.'
        });
        return;
    }
    next();
};