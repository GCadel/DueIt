const API_URL = '/api/tasks'
const getAllTasks = async () => {
    const response = await fetch(`${API_URL}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw new Error('Failed to fetch tasks');
    return await response.json();
}

const createTask = async (taskData) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    }

    const response = await fetch(`${API_URL}/create`, options);
    if (!response.ok) throw new Error('Failed to create task');
    window.location = '/tasks'
}

export default {
    getAllTasks,
    createTask
}