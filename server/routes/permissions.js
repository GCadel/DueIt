import express from "express";
import PermissionsController from "../controllers/permissions.js";

const router = express.Router();

router.get("/", PermissionsController.getPermissions);
router.get("/:userId", PermissionsController.getPermissionById);
router.delete("/delete", PermissionsController.deletePermissionById);
router.post("/create", PermissionsController.createPermission);
router.patch("/update", PermissionsController.updatePermission);

export default router;
