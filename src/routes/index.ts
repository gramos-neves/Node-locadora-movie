import { Router } from 'express';
import usersRouter from './user.routes';
import sessionRouter from './sessions.routes';
import rentalRouter from './rent.routes';
import movieRouter from './movie.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionRouter);
router.use('/rents', rentalRouter);
router.use('/movie', movieRouter);


export default router