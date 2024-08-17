import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './route/card.route';

const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN || '*',
    credentials: true,
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(helmet());

app.use('/api/v1/cards', router);

export { app };
