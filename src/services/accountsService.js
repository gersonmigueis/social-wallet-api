const AccountRepository = require('../repository/accountsRepository');

class AccountService {
  static async list() {
    try {
      const dataList = await AccountRepository.findAccount();
      return dataList;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async save(name) {
    try {
      const dataSave = await AccountRepository.createAccounts(name);
      return dataSave;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = AccountService;
