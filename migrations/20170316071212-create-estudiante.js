'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Estudiantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_estudiante: {
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      carnet: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Estudiantes');
  }
};