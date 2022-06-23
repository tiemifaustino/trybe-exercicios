const express = require('express')
const app = express()
const port = 3001

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
});

app.get('/', (_req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))