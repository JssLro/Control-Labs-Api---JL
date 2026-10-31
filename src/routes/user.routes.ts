import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import {
    validateCreateUserPayload,
    validateUpdateUserPayload
} from '../middlewares/validateUser.middleware';

const router = Router();

router.get('/', UserController.getUsers);
router.post('/', validateCreateUserPayload, UserController.createUser);
router.get('/:id', UserController.getUserById);
router.patch('/:id', validateUpdateUserPayload, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;