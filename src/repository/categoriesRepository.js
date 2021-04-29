/* eslint-disable no-unreachable */
// eslint-disable-next-line import/newline-after-import
const database = require('../models');

class CategoriesRepository {
  static async findCategories() {
    const data = await database.Categories.findAll();
    if (!data) {
      throw new Error('Não foi possivel listar Categorias');
    }
    return data;
  }

  static async createCategories(description) {
    try {
      return await database.Categories.create({ description });
    } catch (error) {
      throw new Error('Erro ao salvar Categoria');
    }
  }
}

module.exports = CategoriesRepository;
