import { Router } from 'express';
import { LoanController } from '../controllers/loan.controller.ts';
import { validateLoanPayload } from '../middlewares/validateLoan.middleware.ts';

const router = Router();

router.get('/search', LoanController.getLoansByFilter);
router.post('/', validateLoanPayload, LoanController.createLoan);
router.get('/:id', LoanController.getLoanById);
router.put('/:id/accept', LoanController.acceptLoan);

export default router;