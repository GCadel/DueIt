const API_URL = '/api/user'
const getAllUsers = async () => {
    const response = await fetch(`${API_URL}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
}

const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw new Error(`Failed to fetch user ${id}`);
    return await response.json();
}

export default {
    getAllUsers,
    getUserById
}