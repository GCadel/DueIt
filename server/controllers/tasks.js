import { pool } from "../config/database.js";

const getTasks = async (req, res) => {
    try{
        const selectQuery = `
            SELECT * 
            FROM tasks
        `
        const results = await pool.query(selectQuery);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

const getTaskById = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const selectQuery = `
    SELECT id, name, description, created_at, board_id, assignee_id, status_id 
    FROM tasks
    WHERE id=$1`;
    const results = await pool.query(selectQuery, [taskId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
      const selectQuery = `
      DELETE
      FROM tasks
      WHERE id=$1`;
      const results = await pool.query(selectQuery, [taskId]);
      res.status(200).json(results.rows);
    } catch (err) {
      res.status(409).json({ error: err.message });
    }
};

const createTask = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const insertQuery = `
    INSERT INTO tasks(name, description, created_at, board_id, assignee_id, status_id)
    VALUES($1, $2, $3, $4, $5, $6)`;
    const values = [
      data.name,
      data.description,
      data.created_at,
      data.board_id,
      data.assignee_id,
      data.status_id
    ];

    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const data = req.params.id;
  console.log(data);
  try {
    const updateQuery = `
    UPDATE tasks
    SET 
      name=$1, 
      description=$2, 
      created_at=$3, 
      board_id=$4, 
      assignee_id=$5,
      status_id = $6
    WHERE id=$7`;
    const values = [
      data.name,
      data.description,
      data.created_at,
      data.board_id,
      data.assignee_id,
      data.status_id,
      data.id,
    ];

    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
    getTasks,
    getTaskById,
    deleteTaskById,
    createTask,
    updateTask,
};
