import { Router } from 'express';
import { RoomController } from '../controllers/rooms.controller';

const router = Router();

router.get('/', RoomController.getRooms);
router.post('/', RoomController.createRoom);
router.patch('/:id', RoomController.updateRoom);
router.delete('/:id', RoomController.deleteRoom);

export default router;