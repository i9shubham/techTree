import express from 'express';
import userController from '../methods/userController.js';

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/getUserById/:id', userController.getUserById);

export default router;
