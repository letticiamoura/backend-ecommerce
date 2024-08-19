import { DataTypes } from "sequelize";
import sequelize from "../database/index.js"; 

const ProductsOptions = sequelize.define('ProductsOptions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  shape: {
    type: DataTypes.ENUM('square', 'circle'),
    defaultValue: 'square'
  },
  radius: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  type: {
    type: DataTypes.ENUM('text', 'color'),
    defaultValue: 'text'
  },
  value: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW
  },
  updatedAt: {
      type: DataTypes.DATE,
      field: 'update_at',
      defaultValue: null,
      onUpdate: DataTypes.NOW
  }
}, {
  tableName: 'products_options',
  timestamps: true
});

export default ProductsOptions;
