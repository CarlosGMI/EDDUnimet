'use strict';
module.exports = function(sequelize, DataTypes) {
  var PreguntaB = sequelize.define('PreguntaB', {
    IDPreguntaB: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    enunciado: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) 
      {
        PreguntaB.hasMany(models.RespuestaB,{foreignKey: 'IDPreguntaB'}); //Una pregunta del modelo B tiene muchas N respuestas del Modelo B
      }
    }
  });
  return PreguntaB;
};