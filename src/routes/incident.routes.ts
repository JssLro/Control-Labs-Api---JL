import { Router } from 'express';
import { IncidentController } from '../controllers/incident.controller';
import {
    validateCreateIncidentPayload,
    validateUpdateIncidentStatusPayload
} from '../middlewares/validateIncident.middleware';

const router = Router();

router.post('/', validateCreateIncidentPayload, IncidentController.createIncident);
router.get('/', IncidentController.getIncidents);
router.patch('/:id/status', validateUpdateIncidentStatusPayload, IncidentController.updateIncidentStatus);

export default router;