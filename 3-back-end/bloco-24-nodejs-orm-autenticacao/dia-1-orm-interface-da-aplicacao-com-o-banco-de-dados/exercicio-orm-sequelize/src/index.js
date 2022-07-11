const express = require('express');
const booksRouter = require('./routers/books.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksRouter);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    case 'UnauthorizedError':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));