/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class server_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  server_log.init({
    description: DataTypes.STRING,
    type_log: DataTypes.ENUM('ERROR', 'WARNING', 'ALERT'),
    id_server: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'server_log',
  });
  return server_log;
};
