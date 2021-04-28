const { Router } = require('express');

const router = Router();
const AccountsController = require('../controllers/accountController');

router.get('/accounts', AccountsController.listAccount);

module.exports = router;
