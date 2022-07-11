const bookService = require('../services/booksService');

const booksController = {
  getAll: async (_req, res) => {
    const books = await bookService.getAll();
    res.status(200).json(books);
  },
};

module.exports = booksController;