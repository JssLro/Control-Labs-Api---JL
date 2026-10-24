import { Request, Response } from 'express';

export class IncidentController {
  public static createIncident = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (descripción + equipmentId o roomId) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de novedades todavía no está implementado.'
    });
  };

  public static getIncidents = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder 200 con el historial completo de novedades.
    res.status(501).json({
      success: false,
      message: 'El historial de novedades todavía no está implementado.'
    });
  };

  public static updateIncidentStatus = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar solo status de req.body (pendiente, en proceso o resuelto) y responder con el resultado.
    res.status(501).json({
      success: false,
      message: `El cambio de estado de la novedad ${id} todavía no está implementado.`
    });
  };
}