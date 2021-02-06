const { server } = require('../models');
const db = require('../models/index').sequelize;

const getAllServersData = (limit, offset) => server.findAndCountAll({ limit, offset });

const getServerByIdData = (id) => server.findAll({ where: { id } });

const getLogsData = (limit, offset, spell) => {
  const search = spell ? ` and s.server_name like '%${spell}%' ` : '';
  const query = db.query(
    `SELECT sl.id, s.server_name, sl.description, sl."createdAt", s.server_type FROM servers s LEFT JOIN server_logs sl on s.id = sl.id_server where sl.id_server is not null ${search} offset ${offset} limit ${limit}`,
  );
  return query;
};

module.exports = { getAllServersData, getServerByIdData, getLogsData };
