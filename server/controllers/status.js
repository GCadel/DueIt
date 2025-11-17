import { pool } from "../config/database.js";

const getStatus = async (req, res) => {
  try {
    const selectQuery = `
    SELECT *
    FROM statuses 
    ORDER BY id ASC`;
    const results = await pool.query(selectQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getStatusById = async (req, res) => {
  const statusId = req.params.id;
  try {
    const selectQuery = `
     SELECT *
    FROM statuses
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [statusId]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteStatusById = async (req, res) => {
  const statusId = req.params.id;
  try {
    const selectQuery = `
    DELETE
    FROM statuses
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [statusId]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createStatus = async (req, res) => {
  const data = req.body;
  try {
    const insertQuery = `
    INSERT INTO statuses(name)
    VALUES($1)`;
    const values = [data.name];

    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateStatus = async (req, res) => {
  const statusId = req.params.id
  const data = req.body;
  try {
    const updateQuery = `
    UPDATE statuses
    SET 
      name=$1 
    WHERE id=$2`;
    const values = [data.name, statusId];

    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getStatus,
  getStatusById,
  deleteStatusById,
  createStatus,
  updateStatus,
};
