import { pool } from '../index.js';

export default async function getProduct(offset) {
  const query = `SELECT * FROM products ${offset} LIMIT 9`;
  console.log(query);
  const result = await pool.query(query);
  return result.rows;
}
