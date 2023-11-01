import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoConnection from './config/dbconfig.js';
import logger from 'morgan';

import userRoutes from './routes/user.js';
import themeRoutes from './routes/theme.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(logger('dev'));
mongoConnection();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);
app.use('/api/theme', themeRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
