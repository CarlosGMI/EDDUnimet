'use strict';
module.exports = function(sequelize, DataTypes) {
  var estudiante = sequelize.define('estudiante', {
    Id_est: DataTypes.INTEGER,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return estudiante;
};