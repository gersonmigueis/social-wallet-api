const { Router } = require('express');

const router = Router();
const AccountsController = require('../controllers/accountController');

router.get('/accounts', AccountsController.listAccount);
router.post('/accounts/save', AccountsController.saveAccounts);

module.exports = router;
