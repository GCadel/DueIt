import * as boardRepository from "../repositories/board.repository.js";

export async function getAllBoards() {
  return boardRepository.findAll();
}

export async function getBoardById(id) {
  const board = await boardRepository.findById(id);
  if (!board) throw new Error("Board not found");
  return board;
}

export async function createBoard(data) {
  if (!data.project_id) {
    throw new Error("Project ID is required");
  }

  return boardRepository.create(data);
}

export async function updateBoard(id, data) {
  await getBoardById(id);
  return boardRepository.update(id, data);
}

export async function deleteBoard(id) {
  await getBoardById(id);
  return boardRepository.remove(id);
}
