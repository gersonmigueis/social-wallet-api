const AccountRepository = require('../repository/accountRepository');

class AccountService {
  static async list() {
    try {
      const dataList = await AccountRepository.findAccount();
      return dataList;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = AccountService;
