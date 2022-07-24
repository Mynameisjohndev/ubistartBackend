import express from 'express';
import { connectMongo } from './database';
import Cors from "cors";
import { routes } from './routes';

const app = express();
app.use(Cors());

app.use(express.json())

connectMongo();
app.use(routes);

app.listen(3334,()=>{
  console.log("Server is Running");
})