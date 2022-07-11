const express = require('express');
const booksRouter = require('./routers/books.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));