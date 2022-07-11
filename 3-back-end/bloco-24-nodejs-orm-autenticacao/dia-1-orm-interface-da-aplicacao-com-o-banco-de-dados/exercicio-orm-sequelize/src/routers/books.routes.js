const { Router } = require('express');

const booksController = require('../controllers/booksController');

const booksRouter = Router();

booksRouter.get('/', booksController.getAll);
booksRouter.get('/:id', booksController.getById);
booksRouter.post('/', booksController.create);
booksRouter.put('/:id', booksController.update);

module.exports = booksRouter;