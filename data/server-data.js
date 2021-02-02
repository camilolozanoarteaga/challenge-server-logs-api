const { server } = require("../models");

const getAllServersData = (limit, offset) => {
  return server.findAndCountAll({
    limit,
    offset
  });
};

const getServerByIdData = (id) => {
  return server.findAll({
    where: {
      id,
    },
  });
};

module.exports = { getAllServersData, getServerByIdData };
