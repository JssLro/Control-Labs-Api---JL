// @ts-ignore Express type declarations are not installed in this project.
import { Router } from 'express';
import { RoomController } from '../controllers/room.controller';

const router = Router();

router.get('/', RoomController.getRooms);
router.post('/', RoomController.createRoom);
router.patch('/:id', RoomController.updateRoom);

export default router;