const { Router } = require('express');

const router = Router();
const TransactionsController = require('../controllers/transactionsController');

router.post('/transactions/save', TransactionsController.saveTransactions);

module.exports = router;
