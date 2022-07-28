import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();
const booksController = new BooksController();

// variável definida para não repetir trechos iguais em todas as rotas que usam o id.
const booksSlashId = '/books/:id'; 

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;