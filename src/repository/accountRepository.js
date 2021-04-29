// eslint-disable-next-line import/newline-after-import
const database = require('../models');
class AccountRepository {
  static async findAccount() {
    try {
      return await database.Accounts.findAll();
    } catch (error) {
      throw new Error('Não foi possivel listar contas');
    }
  }

  static async createAccounts(name) {
    try {
      return await database.Accounts.create({ name });
    } catch (error) {
      throw new Error('Erro ao salvar conta');
    }
  }
}

module.exports = AccountRepository;
