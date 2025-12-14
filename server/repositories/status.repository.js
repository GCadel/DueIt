import { pool } from "../config/database.js";

export async function findAll() {
  const result = await pool.query(`SELECT *
    FROM statuses 
    ORDER BY id ASC`);
  return result.rows;
}

export async function findById(id) {
  const result = await pool.query(
    `
     SELECT *
    FROM statuses
    WHERE id=$1`,
    [id]
  );
  return result.rows[0];
}

export async function create(status) {
  const { name } = status;
  const result = await pool.query(
    `
    INSERT INTO statuses (name) VALUES ($1) RETURNING *
    `,
    [name]
  );
  return result.rows[0];
}

export async function update(id, data) {
  const { name } = data;
  const result = await pool.query(
    `
    UPDATE statuses
    SET
      name = $1
    WHERE id = $2
    RETURNING *
    `,
    [name, id]
  );
  return result.rows[0];
}

export async function remove(id) {
  return pool.query(`DELETE FROM statuses WHERE id = $1`, [id]);
}
