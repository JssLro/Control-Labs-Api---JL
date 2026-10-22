import { Router } from 'express';
// @ts-ignore loan.routes currently has no module declaration.
import loanRoutes from './loan.routes';

const router = Router();
router.use('/loans', loanRoutes);

// Aquí se montan los routers por recurso: router.use('/loans', loanRoutes);

export default router;