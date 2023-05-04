import { pool } from '../index.js';

async function get(offset) {
  const query = `SELECT * FROM products ${offset} LIMIT 9`;
  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  get,
};
