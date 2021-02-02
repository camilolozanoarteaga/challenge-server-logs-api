const { server } = require('../models');

const getAllServersData = (limit, offset) => server.findAndCountAll({
  limit,
  offset,
});

const getServerByIdData = (id) => server.findAll({
  where: {
    id,
  },
});

module.exports = { getAllServersData, getServerByIdData };
