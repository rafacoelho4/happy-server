import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';
import './database/connection';
import routes from './routes';
import 'express-async-errors';
import errorHandler from './errors/handler';

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(5433 || 3333, () => console.log(process.env.TYPEORM_PORT));