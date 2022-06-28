const connection = require('./connection');

const Author = require('./Author');

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

const create = async (title, authorId) => connection.execute(
  'INSERT INTO books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

const isValid = async (title, authorId) => {
  const isAuthorValid = await Author.findById(authorId); 
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !isAuthorValid) return false;

  return true;
};

module.exports ={
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};