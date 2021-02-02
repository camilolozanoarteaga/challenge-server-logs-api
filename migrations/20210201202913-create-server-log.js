module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('server_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      type_log: {
        type: Sequelize.ENUM('ERROR', 'WARNING', 'ALERT'),
      },
      id_server: {
        type: Sequelize.INTEGER,
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
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('server_logs');
  },
};
