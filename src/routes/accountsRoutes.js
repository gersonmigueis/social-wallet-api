const { Router } = require('express');

const router = Router();
const AccountsController = require('../controllers/accountsController');

router.get('/accounts', AccountsController.listAccount);
router.post('/accounts/save', AccountsController.saveAccounts);

module.exports = router;
