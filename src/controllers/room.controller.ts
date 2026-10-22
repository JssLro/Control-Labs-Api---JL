import { Request, Response } from 'express';

export class RoomController {
  public static getRooms = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder 200 con todos los ambientes y laboratorios.
    res.status(501).json({
      success: false,
      message: 'El listado de ambientes todavía no está implementado.'
    });
  };

  public static createRoom = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (nombre, capacidad, ubicación) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de ambientes todavía no está implementado.'
    });
  };

  public static updateRoom = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: actualización PARCIAL. Tomar de req.body solo los campos enviados (capacity, status).
    res.status(501).json({
      success: false,
      message: `La actualización parcial del ambiente ${id} todavía no está implementada.`
    });
  };
}