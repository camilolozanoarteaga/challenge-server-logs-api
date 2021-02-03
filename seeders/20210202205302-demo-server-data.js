/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { DateTime } = require('luxon');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('servers', [{
      server_name: 'SERVER-WEB__01',
      description: 'Servidor de aplicaciones web - front',
      server_type: 'VM/OS_LNX',
      createdAt: '2020-01-02 15:10:22.236000 -05:00',
      updatedAt: '2020-01-02 15:10:22.236000 -05:00',
    },
    {
      server_name: 'SERVER-WEB__02',
      description: 'Servidor de aplicaciones - REST API',
      server_type: 'VM/OS_LNX',
      createdAt: '2020-01-02 15:10:22.236000 -05:00',
      updatedAt: '2020-01-02 15:10:22.236000 -05:00',
    },
    {
      server_name: 'SERVER-EMAIL__01',
      description: 'Servidor de correo',
      server_type: 'VM/OS_LXN',
      createdAt: '2020-01-02 15:10:22.236000 -05:00',
      updatedAt: '2020-01-02 15:10:22.236000 -05:00',
    },
    {
      server_name: 'SERVER-EMAIL__02',
      description: 'Servidor de correo corporativo',
      server_type: 'AWS/OS_WS',
      createdAt: '2020-01-02 15:10:22.236000 -05:00',
      updatedAt: '2020-01-02 15:10:22.236000 -05:00',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('servers', null, {});
  },
};
