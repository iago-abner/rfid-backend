import express from 'express';
import { connectMongodb } from './database/db';
import { router } from './routes';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(router);

connectMongodb(process.env.MONGO_URI);

app.listen(3000, () => {
  console.log('Server is running in port 3000')
});

