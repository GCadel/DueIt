import { pool } from "../config/database.js";

const getRolePermissions = async (req, res) => {
  try {
    const selectQuery = `
    SELECT *
    FROM role_permissions
    ORDER BY id ASC`;
    const results = await pool.query(selectQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getRolePermissionById = async (req, res) => {
  const rolePermissionId = req.params.id;
  try {
    const selectQuery = `
     SELECT *
    FROM role_permissions
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [rolePermissionId]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getRolePermissions,
  getRolePermissionById,
};
