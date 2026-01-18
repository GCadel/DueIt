import * as statusService from "../services/status.service.js";

export async function getAllStatuses(req, res, next) {
  try {
    const statuses = await statusService.getAllStatuses();
    res.status(200).json(statuses);
  } catch (err) {
    next(err);
  }
}

export async function getStatusById(req, res, next) {
  try {
    const status = await statusService.getStatusById(req.params.id);
    res.status(200).json(status);
  } catch (err) {
    next(err);
  }
}

export async function createStatus(req, res, next) {
  try {
    const status = await statusService.createStatus(req.body);
    // res.status(201).location(`/statuses/${status.id}`).json(status);
    res.status(201).json(status);
  } catch (err) {
    next(err);
  }
}

export async function updateStatus(req, res, next) {
  try {
    const status = await statusService.updateStatus(req.params.id, req.body);
    res.status(200).json(status);
  } catch (err) {
    next(err);
  }
}

export async function deleteStatus(req, res, next) {
  try {
    await statusService.deleteStatus(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}
