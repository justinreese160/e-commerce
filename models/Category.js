const { Model, DataTypes } = require('sequelize');
const { NOT } = require('sequelize/types/lib/deferrable');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    // define columns
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;