const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'model_example',
  port: 3307,
  });

module.exports = connection;

  // index.js
  //  -> controllers/authors
  //    -> services/authors
  //      -> models/author
  //        -> models/connection
