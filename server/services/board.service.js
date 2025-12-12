import * as boardRepository from "../repositories/board.repository.js";
import { NotFoundError, RequiredFieldError } from "../errors/index.js";

export async function getAllBoards() {
  return boardRepository.findAll();
}

export async function getBoardById(id) {
  const board = await boardRepository.findById(id);
  if (!board) {
    throw new NotFoundError("Board not found");
  }
  return board;
}

export async function createBoard(data) {
  if (!data.project_id) {
    throw new RequiredFieldError("Project ID is required");
  }
  return boardRepository.create(data);
}

export async function updateBoard(id, data) {
  const original = await getBoardById(id);
  const modified = { ...original, ...data };
  if (!modified.project_id) {
    throw new RequiredFieldError("Project ID is required");
  }
  return boardRepository.update(id, data);
}

export async function deleteBoard(id) {
  await getBoardById(id);
  return boardRepository.remove(id);
}
