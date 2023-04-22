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
    /*  models.Producto.hasOne(models.Categoria,{
        foreignkey:id_categoria,
      })*/
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    codigobarra: DataTypes.STRING,
    marca: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    id_categoria:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};