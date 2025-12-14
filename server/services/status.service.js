import * as statusRepository from "../repositories/status.repository.js";
import { NotFoundError, RequiredFieldError } from "../errors/index.js";

export async function getAllStatuses() {
  return statusRepository.findAll();
}

export async function getStatusById(id) {
  const status = await statusRepository.findById(id);
  if (!status) {
    throw new NotFoundError("Status not found");
  }
  return status;
}

export async function createStatus(data) {
  if (!data.name) {
    throw new RequiredFieldError("Status name is required");
  }
  return statusRepository.create(data);
}

export async function updateStatus(id, data) {
  const original = await getStatusById(id);
  const modified = { ...original, ...data };
  if (!modified.name) {
    throw new RequiredFieldError("Status name is required");
  }
  return statusRepository.update(id, data);
}

export async function deleteStatus(id) {
  if (await getStatusById(id)) {
    return statusRepository.remove(id);
  }
}
