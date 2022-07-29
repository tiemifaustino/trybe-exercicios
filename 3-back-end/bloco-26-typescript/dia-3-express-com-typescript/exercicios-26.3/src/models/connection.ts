import mysql from 'mysql2/promise';

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

export default mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: Number(DB_PORT),
});