import express from "express";
import RolePermissionsController from "../controllers/role_permissions.js";

const router = express.Router();

router.get("/", RolePermissionsController.getRolePermissions);
router.get("/:id", RolePermissionsController.getRolePermissionById);

export default router;
