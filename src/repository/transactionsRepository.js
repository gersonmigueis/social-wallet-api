// eslint-disable-next-line import/newline-after-import
const database = require('../models');

class TransactionsRepository {
  // eslint-disable-next-line
  static async createTransaction(value, type, observation, id_account, id_category) {
    // eslint-disable-next-line
    const dataTransaction = await database.Transactions.create({ value, type, observation, id_account, id_category });

    if (!dataTransaction) {
      throw new Error('Não foi possivel realizar transação');
    }
    return dataTransaction;
  }
}
module.exports = TransactionsRepository;
