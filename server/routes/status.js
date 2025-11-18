import express from "express";
import StatusController from "../controllers/status.js";

const router = express.Router();

router.get("/", StatusController.getStatus);
router.get("/:id", StatusController.getStatusById);
router.delete("/:id", StatusController.deleteStatusById);
router.post("/", StatusController.createStatus);
router.patch("/:id", StatusController.updateStatus);

export default router;
