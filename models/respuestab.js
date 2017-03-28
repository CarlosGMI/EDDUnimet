'use strict';
module.exports = function(sequelize, DataTypes) {
  var RespuestaB = sequelize.define('RespuestaB', {
    IDRespuestaB: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    valor: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    classMethods: {
      associate: function(models) 
      {
        
      }
    }
  });
  return RespuestaB;
};