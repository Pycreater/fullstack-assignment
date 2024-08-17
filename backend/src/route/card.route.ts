import { Router } from 'express';
import {
  addCard,
  getAllCards,
  getByTitle,
} from '../controller/card.controller';

const router = Router();

router.route('/').get(getAllCards);
router.route('/').post(addCard);
router.route('/:title').post(getByTitle);

export { router };
