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

  create: async ({ title, author, pageQuantity }) => {
    const bookCreated = await db.Book.create({
      title,
      author,
      pageQuantity,
    });
    return bookCreated;
  },

  update: async (id, { title, author, pageQuantity }) => {
    const bookUpdated = await db.Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      {
        where: { id },
      },
    );
    return bookUpdated;
  },

  remove: async (id) => {
    const removed = await db.Book.destroy({ where: { id } });
    return removed;
  },
};

module.exports = booksService;
