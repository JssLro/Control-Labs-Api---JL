import { Router } from 'express';
import { EquipmentController } from '../controllers/equipment.controller.ts';

const router = Router();

router.post('/', EquipmentController.createEquipment);
router.get('/', EquipmentController.getEquipment);
router.patch('/:id', EquipmentController.updateEquipment);

export default router;