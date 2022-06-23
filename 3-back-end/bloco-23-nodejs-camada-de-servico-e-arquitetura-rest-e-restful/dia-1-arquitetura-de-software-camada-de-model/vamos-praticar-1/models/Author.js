const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  // o filter é para retirar o middleName de alguns autores que não tem esse campo (está como null no banco)
  // vai filtrar somente os campos preenchidos
  // o join é para transformar esse array em uma string separada por espaços
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

// converte o snake_case em camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

// retorna a lista de todos os autores do banco de dados
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );
  return authors.map(serialize).map(getNewAuthor);
}
//  Esse método retorna uma Promise que, quando resolvida, nos fornece um array com 2 campos: [rows, fields]
// O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar. ("buffers")
// desestruturando desta forma: [authors] -> pegamos apenas o primeiro elemento do array que é o array de autores

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?;',
    [id] // bind para evitar ataque "sql injection"
    // por interpolação ${id} a aplicação fica vulnerável, é possível "dropar" colocando depois do id "3; DROP DATABASE"
  );
  if (authorData.length === 0) return null;
  
  // retorna o 1º elemento do array
  // como o id é uma primary key, só terá um elemento nesse array, porém para acessar, colocar a posição [0]
  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({ id, firstName, middleName, lastName });
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

module.exports ={
  getAll,
  findById,
  isValid,
  create,
};
