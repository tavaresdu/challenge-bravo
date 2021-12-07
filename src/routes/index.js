import express from 'express';
import helloRouter from './helloRoutes';

const router = express.Router();

router.use('/hello', helloRouter);

export default router;