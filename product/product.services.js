import { pool } from '../index.js';

export const pizza = async (offset) => {
  console.log('pizza here');
  console.log(offset);
  const query = `SELECT * FROM products ${offset} LIMIT 9`;
  const result = await pool.query(query);
  return result.rows;
};
