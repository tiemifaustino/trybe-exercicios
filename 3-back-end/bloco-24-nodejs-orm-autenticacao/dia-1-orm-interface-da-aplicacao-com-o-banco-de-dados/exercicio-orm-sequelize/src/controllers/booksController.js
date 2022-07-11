const bookService = require('../services/booksService');

const booksController = {
  getAll: async (_req, res) => {
    const books = await bookService.getAll();
    res.status(200).json(books);
  },

  getById: async (req, res) => {
    const book = await bookService.getById(req.params.id);
    res.status(200).json(book);
  },
};

module.exports = booksController;