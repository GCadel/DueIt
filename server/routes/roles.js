import express from "express";
import RolesController from "../controllers/roles.js";

const router = express.Router();

router.get("/", RolesController.getRoles);
router.get("/:id", RolesController.getRoleById);

export default router;
