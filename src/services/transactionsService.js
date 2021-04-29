// eslint-disable-next-line eol-last
const TransactionsRepository = require('../repository/transactionsRepository');

class TransactionsServices {
  // eslint-disable-next-line
  static async save(value, type, observation, id_account, id_category) {
    try {
      // eslint-disable-next-line
        const dataSave = TransactionsRepository.createTransaction(value, type, observation, id_account, id_category);  
      return dataSave;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = TransactionsServices;
