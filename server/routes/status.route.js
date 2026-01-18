import express from "express";
import * as StatusController from "../controllers/status.controller.js";

const router = express.Router();

router.get("/", StatusController.getAllStatuses);
router.get("/:id", StatusController.getStatusById);
router.delete("/:id", StatusController.deleteStatus);
router.post("/", StatusController.createStatus);
router.patch("/:id", StatusController.updateStatus);

export default router;
