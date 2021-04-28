const AccountService = require('../services/accountService');

class AccountsController {
  static async listAccount(request, response) {
    try {
      const dataAccount = await AccountService.list();
      return response.status(200).json(dataAccount);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
module.exports = AccountsController;
