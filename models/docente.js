'use strict';
module.exports = function(sequelize, DataTypes) {
  var Docente = sequelize.define('Docente', {
    IDDocente: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models)
      {
        Docente.hasMany(models.Seccion,{foreignKey: 'IDDocente'}); //Un docente imparte clases en muchas secciones
        Docente.belongsToMany(models.Departamento,{through: 'Docente_Departamento',foreignKey: 'IDDocente'}); //Un docente pertenece a N departamentos
      }
    }
  });
  return Docente;
};