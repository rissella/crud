'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.categoria.hasMany(models.producto,{
        foreignKey:'id_categoria'
      })
    }
  }
  Categoria.init({
    id_categoria:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    nombre:{
      type:DataTypes.STRING,
      allowNull: false
    } ,
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'categoria',
    freezeTableName:true
  });
  return Categoria;
};