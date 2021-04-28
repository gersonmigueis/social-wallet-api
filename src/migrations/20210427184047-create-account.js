module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoincrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Accounts');
  },
};
