import { Router } from 'express';
// @ts-ignore The controller file currently has no exports.
import { LoanController } from '../controllers/loan.controller';

const router = Router();

router.get('/search', LoanController.getLoansByFilter);
router.get('/:id', LoanController.getLoanById);

router.post('/', LoanController.createLoan);

router.patch('/:id/accept', LoanController.acceptLoanInventory);


export default router;