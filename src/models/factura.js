'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.factura.belongsTo(models.cliente,{
        foreignKey:'cedula_cliente',        
      })
    }
  }
  Factura.init({
    num_factura:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    fecha_factura: DataTypes.DATE,
    cedula_cliente: DataTypes.INTEGER,
    estado: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}
  }, {
    sequelize,
    modelName: 'factura',
    freezeTableName:true
  });
  return Factura;
};