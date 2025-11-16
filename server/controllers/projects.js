import { pool } from "../config/database.js"

const getProjects = async (req, res) => {
    try {
        const selectQuery = `
            SELECT *
            FROM projects
            ORDER BY id ASC;
        `;
        const results = await pool.query(selectQuery);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const getProjectById = async (req, res) => {
    const projectId = req.params.id;
    try {
        const selectQuery = `
            SELECT id, name, description, owner_id
            FROM projects
            WHERE id=$1
        `
        const results = await pool.query(selectQuery, [projectId]);
        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const deleteProjectById = async (req, res) => {
    const projectId = req.params.id;
    try {
        const deleteQuery = `
            DELETE
            FROM projects
            WHERE id=$1;
        `;
        const result = await pool.query(deleteQuery, [projectId]);
        res.status(204).json(result.rows[0])
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

const createProject = async (req, res) => {
    const { name, description, owner_id } = req.body;
    try {
        const insertQuery = `
            INSERT INTO projects (name, description, owner_id)
            VALUES ($1, $2, $3)
            RETURNING *
        `
       const result = await pool.query(insertQuery, [name, description, owner_id]);
       res.status(201).json(result.rows[0])
    } catch (err) {
        res.status(409).json({error: err.message })
    }
}

const updateProject = async (req, res) => {
    const projectId = req.params.id;
    const { name, description, owner_id } = req.body;
    try {
        const updateQuery = `
            UPDATE projects
            SET
                name=$1,
                description=$2,
                owner_id=$3
            WHERE id=$4
        `
        const result = await pool.query(updateQuery, [name, description, owner_id, projectId]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export default {
    getProjects,
    getProjectById,
    deleteProjectById,
    createProject,
    updateProject
}