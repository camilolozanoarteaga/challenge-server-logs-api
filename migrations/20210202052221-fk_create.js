module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.query(
      'ALTER TABLE server_logs ADD CONSTRAINT fk_server FOREIGN KEY (id_server) REFERENCES servers(id) ON DELETE CASCADE ON UPDATE CASCADE;',
    );
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.query(
      'ALTER TABLE server_logs DROP CONSTRAINT fk_server; ',
    );
  },
};
