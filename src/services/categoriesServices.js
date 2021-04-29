const CategoriesRepository = require('../repository/categoriesRepository');

class CategoriesService {
  static async list() {
    try {
      const dataList = await CategoriesRepository.findCategories();
      return dataList;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async save(description) {
    try {
      const dataSave = await CategoriesRepository.createCategories(description);
      return dataSave;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = CategoriesService;
