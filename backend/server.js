import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoConnection from './config/dbconfig.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

mongoConnection();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
