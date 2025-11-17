import express from "express";
import RolesController from "../controllers/roles.js";

const router = express.Router();

router.get("/", RolesController.getRoles);
router.get("/:userId", RolesController.getRoleById);
router.delete("/delete", RolesController.deleteRoleById);
router.post("/create", RolesController.createRole);
router.patch("/update", RolesController.updateRole);

export default router;
