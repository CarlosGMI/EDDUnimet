'use strict';
module.exports = function(sequelize, DataTypes) {
  var Docente = sequelize.define('Docente', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Docente;
};