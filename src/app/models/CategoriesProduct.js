import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const CategoriesProduct = sequelize.define('CategoriesProduct', {
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
  id_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  },
  update_at: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW
  }
}, {
  tableName: 'categories_product',
  timestamps: false
});

export default CategoriesProduct;
