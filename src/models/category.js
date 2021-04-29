const { uuid } = require('uuidv4');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line
  class Category extends Model {}
  Category.init({
    description: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Categories',
  });

  Category.beforeCreate((category) => {
    // eslint-disable-next-line
    return category.id = uuid();
  });
  return Category;
};
