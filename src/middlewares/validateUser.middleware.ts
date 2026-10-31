import { Request, Response, NextFunction } from 'express';
import { ICreateUserDTO, IUpdateUserDTO, USER_ROLES, USER_STATUSES } from '../dtos/user.dto';
import { hasOnlyKeys, isEmail, isNonEmptyString, isOneOf, isRecord } from '../utils/validation';

const isCreateUserDTO = (value: unknown): value is ICreateUserDTO => {
    if (!isRecord(value)) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['name', 'email', 'role']) &&
        isNonEmptyString(value.name) &&
        isEmail(value.email) &&
        isOneOf(value.role, USER_ROLES)
    );
};

const isUpdateUserDTO = (value: unknown): value is IUpdateUserDTO => {
    if (!isRecord(value) || Object.keys(value).length === 0) {
        return false;
    }

    return (
        hasOnlyKeys(value, ['role', 'status', 'password']) &&
        (value.role === undefined || isOneOf(value.role, USER_ROLES)) &&
        (value.status === undefined || isOneOf(value.status, USER_STATUSES)) &&
        (value.password === undefined ||
            (typeof value.password === 'string' && value.password.length >= 8))
    );
};

export const validateCreateUserPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateUserDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del usuario inválidos.'
        });
        return;
    }
    next();
};

export const validateUpdateUserPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isUpdateUserDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos de actualización del usuario inválidos.'
        });
        return;
    }
    next();
};