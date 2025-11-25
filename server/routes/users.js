import express from "express";
import UserController from "../controllers/users.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:userId", UserController.getUserById);
router.get("/:userId/tasks", UserController.getTaskByUserId);
router.delete("/delete", UserController.deleteUserById);
router.post("/create", UserController.createUser);
router.patch("/update", UserController.updateUser);
router.post("/login", UserController.loginUser);

export default router;
