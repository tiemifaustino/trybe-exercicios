// const { Book } = require('../models');
const db = require('../models');

const booksService = {
  getAll: async () => {
    const books = await db.Book.findAll();
    return books;
  },

  getById: async (id) => {
    const books = await db.Book.findByPk(id);
    return books;
  },
};

module.exports = booksService;
