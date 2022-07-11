// const { Book } = require('../models');
const db = require('../models');

const booksService = {
  getAll: async () => {
    const books = await db.Book.findAll();
    return books;
  },

  getById: async (id) => {
    const books = await db.Book.findByPk(id);
    if (!books) {
      const error = new Error('Book not found');
      error.name = 'NotFoundError';
      throw error;
    }
    return books;
  },
};

module.exports = booksService;
