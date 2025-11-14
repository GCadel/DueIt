import express from "express";
import UserController from "../controllers/users.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:userId", UserController.getUserById);
router.delete("/delete", UserController.deleteUserById);
router.post("/create", UserController.createUser);
router.patch("/update", UserController.updateUser);

export default router;
