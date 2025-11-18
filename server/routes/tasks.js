import express from "express";
import TasksController from "../controllers/tasks.js";

const router = express.Router();

router.get("/", TasksController.getTasks); 
router.get("/formated", TasksController.getTasksFormated)
router.get("/:userId", TasksController.getTaskByUserId);
router.delete("/delete", TasksController.deleteTaskById);
router.post("/create", TasksController.createTask);
router.patch("/update", TasksController.updateTask);

export default router;

