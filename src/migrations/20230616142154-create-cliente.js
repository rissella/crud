'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cliente', {      
      cedula_cliente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_cliente: {
        type: Sequelize.STRING
      },
      telefono_cliente: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.BOOLEAN
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};