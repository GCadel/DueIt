import express from "express";
import PermissionsController from "../controllers/permissions.js";

const router = express.Router();

router.get("/", PermissionsController.getPermissions);
router.get("/:id", PermissionsController.getPermissionById);

export default router;
