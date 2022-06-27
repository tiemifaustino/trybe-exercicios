const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const AuthorControllers = require('./controllers/AuthorControllers');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', rescue(AuthorControllers.getAll));
app.get('/authors/:id', rescue(AuthorControllers.findById));
app.post('/authors', rescue(AuthorControllers.createAuthor));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});