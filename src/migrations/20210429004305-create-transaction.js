module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      value: {
        allowNull: false,
        // eslint-disable-next-line
        type: Sequelize.DECIMAL(15,4),
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      observation: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_account: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
      id_category: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'CategoryTransactions',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Transactions');
  },
};
