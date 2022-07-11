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

  create: async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const bookCreated = await bookService.create({
      title,
      author,
      pageQuantity,
    });
    res.status(201).json(bookCreated);
  },

  update: async (req, res) => {
    const { id } = req.params;
    await bookService.getById(id);
    const { title, author, pageQuantity } = req.body;
    await bookService.update(
      id,
      {
        title,
        author,
        pageQuantity,
      },
    );
    res.status(200).json({ message: 'Book updated!' });
  },

  remove: async (req, res) => {
    const { id } = req.params;
    await bookService.remove(id);
    res.status(200).json({ message: 'Book removed' });
  },
};

module.exports = booksController;