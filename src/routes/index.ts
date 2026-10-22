import { Router } from 'express';
// @ts-ignore loan.routes currently has no module declaration.
import loanRoutes from './loan.routes';
import userRoutes from './user.routes';
import roomRoutes from './room.routes';
import equipmentRoutes from './equipment.routes';

const router = Router();
router.use('/users', userRoutes);
router.use('/loans', loanRoutes);
router.use('/rooms', roomRoutes);
router.use('/equipment', equipmentRoutes);
// Aquí se montan los routers por recurso: router.use('/loans', loanRoutes);

export default router;