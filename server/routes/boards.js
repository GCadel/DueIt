import express from "express";
import BoardsController from "../controllers/boards.js";

const router = express.Router();

router.get("/", BoardsController.getBoards);
router.get("/:id", BoardsController.getBoardById);
router.delete("/:id", BoardsController.deleteBoardById);
router.post("/", BoardsController.createBoard);
router.patch("/:id", BoardsController.updateBoardById);

export default router;
