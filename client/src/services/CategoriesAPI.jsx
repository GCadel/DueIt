const API_URL = '/api/categories'

const getAllCategories = async () => {
    const response = await fetch(`${API_URL}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
}

export default {
    getAllCategories
}