const express = require('express')
const app = express()
const port = 3001

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

// app.get('/books', async (_req, res) => {
//   const books = await Book.getAll();
//   res.status(200).json(books);
// });

// localhost:3001/books?author_id=2
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
    ? await Book.getByAuthorId(author_id)
    : await  Book.getAll();

  res.status(200).json(books);
});

app.get('/', (_req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))