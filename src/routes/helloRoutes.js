import express from 'express';
import * as controller from '../controllers/helloController';

const router = express.Router();

router.get('/', controller.helloWorld);

export default router;