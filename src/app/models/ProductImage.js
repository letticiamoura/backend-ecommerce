import { DataTypes } from "sequelize";
import sequelize from "../database/index.js"; 

const ProductImage = sequelize.define('ProductImage', {
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
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  path: {
    type: DataTypes.STRING(1000),
    allowNull: false
  }
}, {
  tableName: 'product_image',
  timestamps: false
});

export default ProductImage;
