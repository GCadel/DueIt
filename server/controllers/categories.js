import { pool } from "../config/database.js"

const getCategories = async (req, res) => {
    try {
        const selectQuery = `
            SELECT *
            FROM categories
            ORDER BY id ASC;
        `;
        const results = await pool.query(selectQuery);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const getCategoryById = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const selectQuery = `
            SELECT id, name, description
            FROM categories
            WHERE id=$1
        `
        const results = await pool.query(selectQuery, [categoryId]);
        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const deleteCategoryById = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const deleteQuery = `
            DELETE
            FROM categories
            WHERE id=$1;
        `;
        const result = await pool.query(deleteQuery, [categoryId]);
        res.status(204).json(result.rows[0])
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

const createCategory = async (req, res) => {
    const { name, description } = req.body;
    try {
        const insertQuery = `
            INSERT INTO categories (name, description)
            VALUES ($1, $2)
            RETURNING *
        `
       const result = await pool.query(insertQuery, [name, description]);
       res.status(201).json(result.rows[0])
    } catch (err) {
        res.status(409).json({error: err.message })
    }
}

const updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { name, description } = req.body;
    try {
        const updateQuery = `
            UPDATE categories
            SET
                name=$1,
                description=$2
            WHERE id=$3
        `
        const result = await pool.query(updateQuery, [name, description, categoryId]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export default {
    getCategories,
    getCategoryById,
    deleteCategoryById,
    createCategory,
    updateCategory
}