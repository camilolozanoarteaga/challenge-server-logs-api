'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      server.hasMany(models.server_log, {
        foreignKey: 'id_serve',
      });
    }
  };
  server.init({
    description: DataTypes.STRING,
    type_log: DataTypes.ENUM('ERROR', 'WARNING', 'ALERT')
  }, {
    sequelize,
    modelName: 'server',
  });
  return server;
};