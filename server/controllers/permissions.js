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
  const permissionId = req.params.permissionId;
  try {
    const selectQuery = `
    SELECT *
    FROM permissions
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [permissionId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deletePermissionById = async (req, res) => {
  const permissionId = req.body.id;
  try {
    const selectQuery = `
    DELETE
    FROM permissions
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [permissionId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createPermission = async (req, res) => {
  const data = req.body;

  try {
    const insertQuery = `
    INSERT INTO permissions(name, description)
    VALUES($1, $2)`;
    const values = [data.name, data.description];

    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updatePermission = async (req, res) => {
  const data = req.body;

  try {
    const updateQuery = `
    UPDATE permissions
    SET 
      name=$1, 
      description=$2, 
    WHERE id=$3`;
    const values = [data.name, data.description, data.id];

    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getPermissions,
  getPermissionById,
  deletePermissionById,
  createPermission,
  updatePermission,
};
