const CategoriesService = require('../services/categoryServices');

class CategoriesController {
  static async listCategories(request, response) {
    try {
      const dataCategories = await CategoriesService.list();
      return response.status(200).json(dataCategories);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async saveCategories(request, response) {
    const { description } = request.body;
    try {
      const dataCategories = await CategoriesService.save(description);
      return response.status(201).json(dataCategories);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

module.exports = CategoriesController;
