import { Request, Response } from 'express';

export class LoanController {
  public static getLoansByFilter = (req: Request, res: Response): void => {
    const { room, startDate, endDate } = req.query;
    // TODO: Lógica para buscar préstamos con filtros
    res.status(501).json({
      success: false,
      message: 'El historial de préstamos con filtros todavía no está implementado.'
    });
  };

  public static createLoan = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'El registro de préstamos todavía no está implementado.'
    });
  };

  public static getLoanById = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({
      success: false,
      message: `La consulta del préstamo ${id} todavía no está implementada.`
    });
  };

  public static acceptLoan = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({
      success: false,
      message: `La aceptación del inventario del préstamo ${id} todavía no está implementada.`
    });
  };
}