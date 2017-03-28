'use strict';
module.exports = function(sequelize, DataTypes) {
  var RespuestaEvB = sequelize.define('RespuestaEvB', 
  {
    IDRespuestaB: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    valor: DataTypes.INTEGER,
    IDModeloB: {type: DataTypes.INTEGER,
      references: {model: "EvaluacionB", key: "IDModeloB"}
    },
    IDPreguntaB: {type: DataTypes.INTEGER,
      references: {model: "PreguntaB", key: "IDPreguntaB"}
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: 
    {
      associate: function(models) 
      {
        
      }
    }
  });
  return RespuestaEvB;
};