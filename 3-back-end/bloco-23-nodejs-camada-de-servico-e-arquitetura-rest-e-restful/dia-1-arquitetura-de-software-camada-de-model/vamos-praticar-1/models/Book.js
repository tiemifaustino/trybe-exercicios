const connection = require('./connection');

// converte o snake_case em camelCase
const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id
  }
}

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books'
  );

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  // O caractere ? na query será substituído pelo authorId que informamos no array [authorId]
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;',
    [authorId]
  );

  return books.map(serialize)
}

const findById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id=?;',
    [id]
  );
  if (bookData.length === 0) return null;

  return bookData.map(serialize)[0];
}


module.exports ={
  getAll,
  getByAuthorId,
  findById,
};