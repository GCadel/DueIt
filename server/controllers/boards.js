import { pool } from "../config/database.js";

const getBoards = async (req, res) => {
  try {
    const selectQuery = `
            SELECT *
            FROM boards
            ORDER BY id ASC`;
    const results = await pool.query(selectQuery);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getBoardById = async (req, res) => {
  const boardId = req.params.id;
  try {
    const selectQuery = `
        SELECT *
        FROM boards
        WHERE id=$1`;
    const results = await pool.query(selectQuery, [boardId]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteBoardById = async (req, res) => {
  const boardId = req.params.id;
  try {
    const deleteQuery = `
        DELETE
        FROM boards
        WHERE id=$1`;
    const results = await pool.query(deleteQuery, [boardId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createBoard = async (req, res) => {
  const data = req.body;
  try {
    const insertQuery = `
        INSERT INTO boards(name, description, owner_id, project_id)
        VALUES($1, $2, $3, $4)`;
    const values = [
      data.name,
      data.description,
      data.owner_id,
      data.project_id,
    ];
    const result = await pool.query(insertQuery, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateBoardById = async (req, res) => {
  const boardId = req.params.id;
  const data = req.body;
  try {
    const updateQuery = `
        UPDATE boards
        SET
            name=$1,
            description=$2,
            owner_id=$3,
            project_id=$4
        WHERE id=$6`;
    const values = [
      data.name,
      data.description,
      data.owner_id,
      data.project_id,
      boardId,
    ];
    const result = await pool.query(updateQuery, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getBoards,
  getBoardById,
  deleteBoardById,
  updateBoardById,
  createBoard,
};
