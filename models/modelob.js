'use strict';
module.exports = function(sequelize, DataTypes) {
  var ModeloB = sequelize.define('ModeloB', {
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
        ModeloB.hasMany(models.RespuestaB,{foreignKey: 'IDModeloB'}); 
      }
    }
  });
  return ModeloB;
};