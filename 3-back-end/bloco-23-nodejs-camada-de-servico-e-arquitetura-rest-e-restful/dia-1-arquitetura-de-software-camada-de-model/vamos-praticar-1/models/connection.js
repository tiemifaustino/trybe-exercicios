// assíncrono
const mysql = require('mysql2/promise');

// o createPool -> O método createPool cria uma pool de conexões com o banco de dados
// O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão
// abre a conexão e mantém a conexão ativa
const connection = mysql.createPool({
  user: 'root',
  password: 'password', // senha para acessar o banco (Docker)
  port: 3307, // porta do container Docker
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;