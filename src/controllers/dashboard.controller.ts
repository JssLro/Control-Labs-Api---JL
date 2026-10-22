import { Request, Response } from 'express';

export class DashboardController {
  public static getMetrics = (req: Request, res: Response): void => {
    // TODO: responder 200 con los contadores globales: usuarios, ambientes activos,
    // equipos operativos y novedades críticas sin resolver.
    res.status(501).json({
      success: false,
      message: 'Las métricas del dashboard todavía no están implementadas.'
    });
  };
}