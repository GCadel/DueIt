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
  const rolePermissionId = req.params.rolePermissionId;
  try {
    const selectQuery = `
     SELECT *
    FROM role_permissions
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [rolePermissionId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteRolePermissionById = async (req, res) => {
  const rolePermissionId = req.body.id;
  try {
    const selectQuery = `
    DELETE
    FROM role_permissions
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [rolePermissionId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createRolePermission = async (req, res) => {
  const data = req.body;

  try {
    const insertQuery = `
    INSERT INTO role_permissions(role_id, permission_id)
    VALUES($1, $2)`;
    const values = [data.role_id, data.permission_id];

    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateRolePermission = async (req, res) => {
  const data = req.body;

  try {
    const updateQuery = `
    UPDATE role_permissions
    SET 
      role_id=$1,
      permission_id=$2
    WHERE id=$3`;
    const values = [data.role_id, data.permission_id, data.id];

    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getRolePermissions,
  getRolePermissionById,
  deleteRolePermissionById,
  createRolePermission,
  updateRolePermission,
};
