import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';
import { noCache } from '../middlewares/noCache.middleware';

const router = Router();

router.get('/metrics', noCache, DashboardController.getMetrics);

export default router;