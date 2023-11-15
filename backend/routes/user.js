import express from 'express';
import userController from '../methods/userController.js';

const router = express.Router();

router.get('/getTree/:username', userController.getUserById);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.put('/createTree', userController.createTree);
router.put('/changeTheme', userController.changeTheme);

router.get('/checkUserName/:username', userController.checkUserName);
export default router;
