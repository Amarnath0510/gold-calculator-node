import { client } from "./index.js";

 async function updateGoldById(id, data) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .updateOne({ id: id }, { $set: data });
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
    .deleteOne({ id: id });
}
 async function getGoldsById(id) {
  return await client
    .db("gold-calculator")
    .collection("golds")
    .findOne({ id: id });
}
export
{
  getGoldsById,
   createGolds,
    getGolds, 
    deleteGoldsById,
     updateGoldById
};