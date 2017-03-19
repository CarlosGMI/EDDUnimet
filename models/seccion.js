'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seccion = sequelize.define('Seccion', {
    IDSeccion: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    numero: DataTypes.INTEGER,
    modalidad: DataTypes.STRING,
    n_alumnos: DataTypes.INTEGER,
    horario: DataTypes.STRING,
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) 
      {
           Seccion.belongsToMany(models.Estudiante,{through: 'Estudiante_Seccion',foreignKey: 'IDSeccion'}); //Un estudiante ve clases en N secciones
      }
    }
  });
  return Seccion;
};