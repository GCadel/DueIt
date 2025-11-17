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
  const roleId = req.params.roleId;
  try {
    const selectQuery = `
     SELECT * 
    FROM roles
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [roleId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteRoleById = async (req, res) => {
  const roleId = req.body.id;
  try {
    const selectQuery = `
    DELETE
    FROM roles
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [roleId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createRole = async (req, res) => {
  const data = req.body;
  try {
    const insertQuery = `
    INSERT INTO roles(name)
    VALUES($1)`;
    const values = [data.name];

    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateRole = async (req, res) => {
  const data = req.body;
  try {
    const updateQuery = `
    UPDATE roles
    SET name=$1
    WHERE id=$2`;
    const values = [data.name, data.id];

    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getRoles,
  getRoleById,
  deleteRoleById,
  createRole,
  updateRole,
};
