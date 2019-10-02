import { Router } from 'express';
import booksController from '../controllers/booksController';


const router = Router();
router.route('/')
  .get(booksController.get)
  .post(booksController.post);

router.route('/:id')
  .get(booksController.getById)
  .put(booksController.put)
  .patch(booksController.patch)
  .delete(booksController.remove);

export default router;
