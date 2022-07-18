import express from 'express';
import { connectMongo } from './database';
import Cors from "cors";

const app = express();
app.use(Cors());

app.use(express.json())

connectMongo();

app.listen(3000,()=>{
  console.log("Server is Running");
})