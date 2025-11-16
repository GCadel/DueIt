import express from 'express';
import ProjectsController from '../controllers/projects.js'

const router = express.Router();

router.get("/", ProjectsController.getProjects);
router.get("/:id", ProjectsController.getProjectById);
router.delete("/:id", ProjectsController.deleteProjectById);
router.post("/", ProjectsController.createProject);
router.patch("/:id", ProjectsController.updateProject);

export default router;