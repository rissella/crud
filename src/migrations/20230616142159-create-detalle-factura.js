'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleFactura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo_producto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: 'producto' },
          key: 'id'
        }, 
        onDelete:"CASCADE",
         onUpdate:"CASCADE"          
      },
      num_factura: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: 'categoria' },
          key: 'id_categoria'
        }, 
        onDelete:"CASCADE",
         onUpdate:"CASCADE"          
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('detalleFactura');
  }
};