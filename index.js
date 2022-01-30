import express from "express";
import { MongoClient } from "mongodb";
import cors from 'cors';
import dotenv from "dotenv";
import { getGoldsById, createGolds, getGolds, deleteGoldsById, updateGoldById } from "./helper.js";
dotenv.config();
console.log(process.env);


const app = express();
const PORT = 10000;
app.use(cors());
app.use(express.json());
// const golds = [
//   {
//     id: "100",
//     name: "Geometrical Bracelet",
//     picture:
//       "https://static-01.daraz.com.bd/p/28a4c0ddc62f26de1522f84d9fb270c4.jpg",

//     weight: "16 grams",
//     availability: "In stock",
//     price: " M.R.P ₹82560",
//   },
//   {
//     id: "101",
//     name: "Mangalam Gold bangles",
//     picture:
//       "https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",

//     weight: "24 grams",
//     availability: "In stock",
//     price: "M.R.P ₹112360",
//   },

//   {
//     id: "102",
//     name: "Sparkling Gold Ring",
//     picture: "https://ae01.alicdn.com/kf/HTB1k4CAXU_rK1Rjy0Fcq6zEvVXar.jpg",

//     weight: "4g grams",
//     availability: "In stock",
//     price: "M.R.P ₹19680",
//   },
//   {
//     id: "103",
//     name: "Bewitch Studded necklace",
//     picture:
//       "https://www.dailyexcelsior.com/wp-content/uploads/2020/09/necklace.jpg",

//     weight: "24 grams",
//     availability: "Make to order",
//     price: "M.R.P ₹103237",
//   },
//   {
//     id: "104",
//     name: "Gilded Gold Earring",
//     picture:
//       "https://i.pinimg.com/originals/71/86/04/718604e669d5a650f361774bcde04de9.jpg",

//     weight: "11 grams",
//     availability: "In stock",
//     price: "M.R.P ₹45968",
//   },

//   {
//     id: "105",
//     name: "22Kt  Cutwork Mens Chain",
//     picture:
//       "https://www.anuradhaartjewellery.com/assets/images/product/100757/original/CH-176_NET_RS-3800_Q-2_31_white.jpeg",

//     weight: "22 grams",
//     availability: "In stock",
//     price: "M.R.P ₹112000",
//   },

//   {
//     id: "106",
//     name: "Era uncut necklace set",
//     picture:
//       "https://i.pinimg.com/736x/bd/00/d3/bd00d3afac2857b336498ca6f2a1baff.jpg",

//     weight: "32 grams",
//     availability: "Make to order",
//     price: "M.R.P ₹165023",
//   },

//   {
//     id: "107",
//     name: "Ethnix Gold Bangle Set",
//     picture:
//       "https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg",

//     weight: "14.5 grams",
//     availability: "In stock",
//     price: "M.R.P ₹110000",
//   },
// ];

// const MONGO_URL="mongodb://localhost";
const MONGO_URL=process.env.MONGO_URL; 
async function createConnection(){
  const client= new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return  client;

}
export const client= await createConnection() ;

app.get("/", (request, response) => {
  response.send("Hello all welcome  to Gold-Calculator-server's palace");
});

app.use("/golds",goldsRouter)



app.listen(PORT, () => console.log("App is started in", PORT));



