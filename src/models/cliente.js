'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      models.cliente.hasMany(models.factura,{
        foreignKey:'cedula_cliente'
      })

    }
  }
  Cliente.init({
    cedula_cliente:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
     },
    nombre_cliente: DataTypes.STRING,
    telefono_cliente: DataTypes.INTEGER,
    estado: {
      type:DataTypes.BOOLEAN,
      allowNull: false
  } 
  }, {
    sequelize,
    modelName: 'cliente',
    freezeTableName:true
  });
  return Cliente;
};