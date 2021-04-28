const database = require('../models');

class AccountRepository {
  static async findAccount() {
    try {
      return await database.Accounts.findAll();
    } catch (error) {
      throw new Error('Não foi possivel listar contas');
    }
  }
}

module.exports = AccountRepository;
