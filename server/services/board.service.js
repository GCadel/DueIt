import * as boardRepository from "../repositories/board.repository.js";

export async function getAllBoards() {
  return boardRepository.findAll();
}

export async function getBoardById(id) {
  const board = await boardRepository.findById(id);
  if (!board) {
    const err = new Error("Board not found");
    err.status = 404;
    throw err;
  }
  return board;
}

export async function createBoard(data) {
  if (!data.project_id) {
    const err = new Error("Project ID is required");
    err.status = 400;
    throw err;
  }

  return boardRepository.create(data);
}

export async function updateBoard(id, data) {
  await getBoardById(id);
  if (!data.project_id) {
    const err = new Error("Project ID is required");
    err.status = 400;
    throw err;
  }
  return boardRepository.update(id, data);
}

export async function deleteBoard(id) {
  await getBoardById(id);
  return boardRepository.remove(id);
}
