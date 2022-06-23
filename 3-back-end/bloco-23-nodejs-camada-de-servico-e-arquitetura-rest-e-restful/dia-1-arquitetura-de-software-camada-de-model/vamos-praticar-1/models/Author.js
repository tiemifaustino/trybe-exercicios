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

module.exports ={
  getAll,
};