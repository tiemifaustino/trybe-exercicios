// const { Book } = require('../models');
const db = require('../models');

const booksService = {
  getAll: async () => {
    const books = await db.Book.findAll();
    return books;
  },

  getById: async (id) => {
    const book = await db.Book.findByPk(id);
    if (!book) {
      const error = new Error('Book not found');
      error.name = 'NotFoundError';
      throw error;
    }
    return book;
  },
};

module.exports = booksService;
