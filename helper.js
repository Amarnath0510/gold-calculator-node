import { client } from "./index.js";
import {ObjectId} from "mongodb";

 async function updateGoldById(id, data) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
 async function createGolds(data) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .insertMany(data);
}
 async function getGolds(filter) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .find(filter)
    .toArray();
}
 async function deleteGoldsById(id) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .deleteOne({ _id: ObjectId(id) });
}
 async function getGoldsById(id) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .findOne({ _id: ObjectId(id) });
}
export
{
  getGoldsById,
   createGolds,
    getGolds, 
    deleteGoldsById,
     updateGoldById
};