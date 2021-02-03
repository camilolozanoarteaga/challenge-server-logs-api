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

const createServerData = (body) => server.create({
  server_name: body.server,
  description: body.description,
  server_type: body.server_type,
});

module.exports = { getAllServersData, getServerByIdData, createServerData };
