'use strict';
module.exports = function(sequelize, DataTypes) {
  var profesor = sequelize.define('profesor', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    Id_prof: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    Tusuario: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profesor;
};