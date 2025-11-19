import { pool } from "../config/database.js";

const getPermissions = async (req, res) => {
  try {
    const selectQuery = `
    SELECT *
    FROM permissions 
    ORDER BY id ASC`;
    const results = await pool.query(selectQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getPermissionById = async (req, res) => {
  const permissionId = req.params.id;
  try {
    const selectQuery = `
    SELECT *
    FROM permissions
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [permissionId]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getPermissions,
  getPermissionById,
};
