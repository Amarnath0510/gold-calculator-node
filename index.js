import express from "express";
import { MongoClient } from "mongodb";
import cors from 'cors';
import dotenv from "dotenv";
import { getGoldsById, createGolds, getGolds, deleteGoldsById, updateGoldById } from "./helper.js";
import {goldsRouter} from "./routes/golds.js"
dotenv.config();
console.log(process.env);


const app = express();
const PORT =process.env.PORT;
app.use(cors());
app.use(express.json());



const MONGO_URL=process.env.MONGO_URL; 
async function createConnection(){
  const client= new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return  client;

}
export const client= await createConnection() ;

app.get("/", (request, response) => {
  response.send("Hello all welcome ✌✌ to Gold-Calculator-server's palace");
});

app.use("/golds",goldsRouter)
app.listen(PORT, () => console.log("App is started in", PORT));



