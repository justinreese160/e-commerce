// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'id'
})

// Categories have many Products
Category.hasMany(Product, {
        foreignKey: 'id'
    })
    // Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
        through: {
            model: ProductTag,
            unique: false
        }
    })
    // Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false

    }
})


module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};