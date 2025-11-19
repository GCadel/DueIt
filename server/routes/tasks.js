import express from "express";
import TasksController from "../controllers/tasks.js";

const router = express.Router();

router.get("/", TasksController.getTasks); 
router.get("/:id", TasksController.getTaskById);
router.delete("/:id", TasksController.deleteTaskById);
router.post("/create", TasksController.createTask);
router.patch("/:id", TasksController.updateTask);

export default router;

