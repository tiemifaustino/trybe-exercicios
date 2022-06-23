const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json()); // ou app.use(express.json())

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Author Not found!'});
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  // validação dos campos
  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos'});
  // cria um novo autor
  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso!'});
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

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) return res.status(404).json({ message: 'Book Not found!'});
  res.status(200).json(book);
});

app.get('/', (_req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))