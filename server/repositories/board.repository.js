import { pool } from "../config/database.js";

export async function findAll() {
  const result = await pool.query("SELECT * FROM boards ORDER BY id ASC");
  return result.rows;
}

export async function findById(id) {
  const result = await pool.query("SELECT * FROM boards WHERE id = $1", [id]);
  return result.rows[0];
}

export async function create(board) {
  const { name, description, owner_id, project_id } = board;
  const result = await pool.query(
    "INSERT INTO boards (name, description, owner_id, project_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, description, owner_id, project_id]
  );

  return result.rows[0];
}

export async function update(id, data) {
  const { name, description, owner_id, project_id } = data;
  const result = await pool.query(
    `
    UPDATE boards
    SET
      name = $1,
      description = $2,
      owner_id = $3,
      project_id = $4
    WHERE id = $5
    RETURNING *
    `,
    [name, description, owner_id, project_id, id]
  );
  return result.rows[0];
}

export async function remove(id) {
  return pool.query("DELETE FROM boards WHERE id = $1", [id]);
}
