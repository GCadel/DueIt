import express from "express";
import RolePermissionsController from "../controllers/role_permissions.js";

const router = express.Router();

router.get("/", RolePermissionsController.getRolePermissions);
router.get("/:userId", RolePermissionsController.getRolePermissionById);
router.delete("/delete", RolePermissionsController.deleteRolePermissionById);
router.post("/create", RolePermissionsController.createRolePermission);
router.patch("/update", RolePermissionsController.updateRolePermission);

export default router;
