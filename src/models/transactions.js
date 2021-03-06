const { uuid } = require('uuidv4');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Accounts, { foreignKey: 'id_account' });
      Transaction.belongsTo(models.Categories, { foreignKey: 'id_category' });
    }
  }
  Transaction.init({
    // eslint-disable-next-line
    value: DataTypes.DOUBLE(10,2),
    type: DataTypes.INTEGER,
    observation: DataTypes.STRING,
    id_account: DataTypes.UUID,
    id_category: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Transactions',
  });

  Transaction.beforeCreate((transaction) => {
    // eslint-disable-next-line
    return transaction.id = uuid();
  });
  return Transaction;
};
