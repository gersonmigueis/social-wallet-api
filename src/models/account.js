const { uuid } = require('uuidv4');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line
  class Account extends Model {}
  Account.init({
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Accounts',
  });

  Account.beforeCreate((accounts) => {
    // eslint-disable-next-line
    return accounts.id = uuid();
  });
  return Account;
};
