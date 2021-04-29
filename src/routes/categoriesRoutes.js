const { Router } = require('express');

const router = Router();
const CategoriesController = require('../controllers/categoriesController');

router.get('/categories', CategoriesController.listCategories);
router.post('/categories/save', CategoriesController.saveCategories);

module.exports = router;
