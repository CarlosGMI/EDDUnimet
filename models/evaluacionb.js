'use strict';
module.exports = function(sequelize, DataTypes) {
  var EvaluacionB = sequelize.define('EvaluacionB', {
    IDModeloB: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    IDSeccion: {type: DataTypes.INTEGER,
      references: {model: "Seccion", key: "IDSeccion"}
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) 
      {
        
      }
    }
  });
  return EvaluacionB;
};