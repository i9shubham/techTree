import express from 'express';
import { getTheme } from '../methods/themeController.js';

const router = express.Router();

router.get('/getTheme/:id', getTheme);

export default router;
