import * as boardService from "../services/board.service.js";

export async function getAllBoards(req, res, next) {
  try {
    const boards = await boardService.getAllBoards();
    res.status(200).json(boards);
  } catch (err) {
    next(err);
  }
}

export async function getBoardById(req, res, next) {
  try {
    const board = await boardService.getBoardById(req.params.id);
    if (!board) return res.sendStatus(404);
    res.status(200).json(board);
  } catch (err) {
    next(err);
  }
}

export async function createBoard(req, res, next) {
  try {
    const board = await boardService.createBoard(req.body);
    res.status(201).location(`/boards/${board.id}`).json(board);
  } catch (err) {
    next(err);
  }
}

export async function updateBoard(req, res, next) {
  try {
    const board = await boardService.updateBoard(req.params.id, req.body);
    if (!board) return res.sendStatus(404);
    res.status(200).json(board);
  } catch (err) {
    next(err);
  }
}

export async function deleteBoard(req, res, next) {
  try {
    const deleted = await boardService.deleteBoard(req.params.id);
    if (!deleted) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}
