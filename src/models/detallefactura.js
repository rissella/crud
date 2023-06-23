'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleFactura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetalleFactura.init({
    codigo_producto: DataTypes.INTEGER,
    num_factura: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DOUBLE,
    estado: {
      type:DataTypes.BOOLEAN,
      allowNull: false
  } 
  }, {
    sequelize,
    modelName: 'DetalleFactura',
  });
  return DetalleFactura;
};