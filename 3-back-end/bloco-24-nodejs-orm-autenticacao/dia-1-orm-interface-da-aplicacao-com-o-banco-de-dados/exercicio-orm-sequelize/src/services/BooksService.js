// const { Book } = require('../models');
const db = require('../models');

const booksService = {
  getAll: async () => {
    const books = await db.Book.findAll();
    return books;
  },
};

module.exports = booksService;
