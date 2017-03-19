'use strict';
module.exports = function(sequelize, DataTypes) {
  var Estudiante = sequelize.define('Estudiante', {
    IDEstudiante: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    carnet: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) 
      {
        Estudiante.belongsToMany(models.Seccion,{through: 'Estudiante_Seccion',foreignKey: 'IDEstudiante'});
      }
    }
  });
  return Estudiante;
};