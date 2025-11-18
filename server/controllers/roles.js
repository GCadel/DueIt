import { pool } from "../config/database.js";

const getRoles = async (req, res) => {
  try {
    const selectQuery = `
    SELECT *
    FROM roles 
    ORDER BY id ASC`;
    const results = await pool.query(selectQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getRoleById = async (req, res) => {
  const roleId = req.params.id;
  try {
    const selectQuery = `
     SELECT * 
    FROM roles
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [roleId]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getRoles,
  getRoleById,
};
