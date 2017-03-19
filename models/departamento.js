'use strict';
module.exports = function(sequelize, DataTypes) {
  var Departamento = sequelize.define('Departamento', {
    IDDepartamento: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models)
      {
        Departamento.belongsToMany(models.Docente,{through: 'Docente_Departamento',foreignKey: 'IDDepartamento'}); //Un departamento tiene M docentes  
        Departamento.hasMany(models.Materia,{foreignKey: 'IDDepartamento'}); //Un departamento tiene N materias
        
      }
    }
  });
  return Departamento;
};