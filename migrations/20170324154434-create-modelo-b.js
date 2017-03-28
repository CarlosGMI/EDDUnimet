'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('modeloBs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IDModeloB: {
        type: Sequelize.INTEGER
      },
      p1: {
        type: Sequelize.INTEGER
      },
      p2: {
        type: Sequelize.INTEGER
      },
      p3: {
        type: Sequelize.INTEGER
      },
      p4: {
        type: Sequelize.INTEGER
      },
      p5: {
        type: Sequelize.INTEGER
      },
      p6: {
        type: Sequelize.INTEGER
      },
      p7: {
        type: Sequelize.INTEGER
      },
      p8: {
        type: Sequelize.INTEGER
      },
      p9: {
        type: Sequelize.INTEGER
      },
      p10: {
        type: Sequelize.INTEGER
      },
      p11: {
        type: Sequelize.INTEGER
      },
      p12: {
        type: Sequelize.INTEGER
      },
      p13: {
        type: Sequelize.INTEGER
      },
      p14: {
        type: Sequelize.INTEGER
      },
      p15: {
        type: Sequelize.INTEGER
      },
      p16: {
        type: Sequelize.INTEGER
      },
      p17: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('modeloBs');
  }
};