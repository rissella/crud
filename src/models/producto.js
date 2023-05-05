'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.producto.belongsTo(models.categoria,{
        foreignKey:'id_categoria',
        
      })
    }
  }
  Producto.init({
    nombre: {
      type:DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false
    },
    codigobarra: {
      type:DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type:DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type:DataTypes.DOUBLE,
      allowNull: false
    },
    id_categoria: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'producto',
    freezeTableName:true
  });
  return Producto;
};