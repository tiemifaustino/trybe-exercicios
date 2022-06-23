const connection = require('./connection');

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

module.exports ={
  getAll,
  getByAuthorId,
};