import express from 'express';
import CategoriesController from '../controllers/categories.js'

const router = express.Router();

router.get("/", CategoriesController.getCategories);
router.get("/:id", CategoriesController.getCategoryById);
router.delete("/:id", CategoriesController.deleteCategoryById);
router.post("/", CategoriesController.createCategory);
router.patch("/:id", CategoriesController.updateCategory);

export default router;