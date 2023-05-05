'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('producto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_categoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: 'categoria' },
          key: 'id_categoria'
        }, 
        onDelete:"CASCADE",
         onUpdate:"CASCADE"  

        
      },
      nombre: {
        type: Sequelize.STRING,
         allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      codigobarra: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      precio: {
        type: Sequelize.DOUBLE,
        allowNull: false
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
    await queryInterface.dropTable('Productos');
  }
};