import { pool } from "../config/database.js";

const getUsers = async (req, res) => {
  try {
    const selectQuery = `
    SELECT id,first_name, last_name, email, role_id 
    FROM users 
    ORDER BY id ASC`;
    const results = await pool.query(selectQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const selectQuery = `
     SELECT id,first_name, last_name, email, role_id 
    FROM users
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [userId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.body.id;
  try {
    const selectQuery = `
    DELETE
    FROM users
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [userId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  const data = req.body;
  try {
    const insertQuery = `
    INSERT INTO users(first_name, last_name, email, password_hash, role_id)
    VALUES($1, $2, $3, $4, $5)`;
    const values = [
      data.first_name,
      data.last_name,
      data.email,
      data.password_hash,
      data.role_id,
    ];

    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  const data = req.body;
  try {
    const updateQuery = `
    UPDATE USERS
    SET 
      first_name=$1, 
      last_name=$2, 
      email=$3, 
      password_hash=$4, 
      role_id=$5
    WHERE id=$6`;
    const values = [
      data.first_name,
      data.last_name,
      data.email,
      data.password_hash,
      data.role_id,
      data.id,
    ];

    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getTaskByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const selectQuery = `
        SELECT id, name, description, created_at, board_id, assignee_id, status_id 
        FROM tasks
        WHERE assignee_id=$1`;
    const results = await pool.query(selectQuery, [userId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getUsers,
  getUserById,
  deleteUserById,
  createUser,
  updateUser,
  getTaskByUserId,
};
