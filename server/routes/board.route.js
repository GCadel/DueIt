import express from "express";
import * as boardsController from "../controllers/board.controller.js";

const router = express.Router();

router.get("/", boardsController.getAllBoards);
router.get("/:id", boardsController.getBoardById);
router.delete("/:id", boardsController.deleteBoard);
router.post("/", boardsController.createBoard);
router.patch("/:id", boardsController.updateBoard);

export default router;
