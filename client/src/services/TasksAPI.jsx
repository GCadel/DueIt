const API_URL = "/api/tasks";
const getAllTasks = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Failed to fetch tasks");
  return await response.json();
};

const createTask = async (taskData) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  };

  const response = await fetch(`${API_URL}/create`, options);
  if (!response.ok) throw new Error("Failed to create task");
  window.location = "/tasks";
};

const getTaskById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error(`Failed to fetch task ${id}`);
  return await response.json();
};

const updateTask = async (taskData, listId) => {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...taskData, status_id: listId }),
  };

  const res = await fetch(`${API_URL}/${taskData.id}`, options);
  if (!res.ok) throw new Error("Unable to update task status");
  window.location = "/tasks";
};

export default {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
};
