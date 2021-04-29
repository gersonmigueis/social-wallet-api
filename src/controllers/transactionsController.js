const TransactionsServices = require('../services/transactionsService');

class TransactionsController {
  static async saveTransactions(request, response) {
    // eslint-disable-next-line
    const { value, type, observation, id_account, id_category } = request.body;
    try {
      // eslint-disable-next-line
      const dataTransaction = await TransactionsServices.save(value, type, observation, id_account, id_category);
      return response.status(201).json(dataTransaction);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
module.exports = TransactionsController;
