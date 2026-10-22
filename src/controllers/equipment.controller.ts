import { Request, Response } from 'express';

export class EquipmentController {
  public static createEquipment = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (datos del equipo + roomId del ambiente) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static getEquipment = (req: Request, res: Response): void => {
    const { roomId } = req.query;
    // TODO: si llega roomId, filtrar por ambiente; si no, listar todos los equipos.
    res.status(501).json({
      success: false,
      message: `El listado de equipos${roomId ? ` del ambiente ${roomId}` : ''} todavía no está implementado.`
    });
  };

  public static updateEquipment = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: actualización PARCIAL. Tomar de req.body solo los campos enviados (status, roomId).
    res.status(501).json({
      success: false,
      message: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}