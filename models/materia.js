'use strict';
module.exports = function(sequelize, DataTypes) {
  var Materia = sequelize.define('Materia', {
    IDMateria: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) 
      {
        Materia.hasMany(models.Seccion,{foreignKey: 'IDMateria'}); //Una materia tiene N secciones
      }
    }
  });
  return Materia;
};