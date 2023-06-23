'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('factura', {
      
      num_factura: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_factura: {
        type: Sequelize.DATE
      },
      cedula_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: 'cliente' },
          key: 'cedula_cliente'
        }, 
        onDelete:"CASCADE",
         onUpdate:"CASCADE"          
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
    await queryInterface.dropTable('factura');
  }
};