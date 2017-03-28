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
        type: Sequelize.INT
      },
      p1: {
        type: Sequelize.INT
      },
      p2: {
        type: Sequelize.INT
      },
      p3: {
        type: Sequelize.INT
      },
      p4: {
        type: Sequelize.INT
      },
      p5: {
        type: Sequelize.INT
      },
      p6: {
        type: Sequelize.INT
      },
      p7: {
        type: Sequelize.INT
      },
      p8: {
        type: Sequelize.INT
      },
      p9: {
        type: Sequelize.INT
      },
      p10: {
        type: Sequelize.INT
      },
      p11: {
        type: Sequelize.INT
      },
      p12: {
        type: Sequelize.INT
      },
      p13: {
        type: Sequelize.INT
      },
      p14: {
        type: Sequelize.INT
      },
      p15: {
        type: Sequelize.INT
      },
      p16: {
        type: Sequelize.INT
      },
      p17: {
        type: Sequelize.INT
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