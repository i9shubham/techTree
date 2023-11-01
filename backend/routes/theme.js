import express from 'express';
import { addTheme, getTheme } from '../methods/themeController.js';

const router = express.Router();

router.get('/getTheme/:id', getTheme);
router.post('/createTheme', addTheme);

export default router;
