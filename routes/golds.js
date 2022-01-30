import express from "express";
const router=express.Router();
import
{
  getGoldsById,
   createGolds,
    getGolds, 
    deleteGoldsById,
     updateGoldById
}from "../helper.js";

router
.route("/:id")
.get(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const gold= await getGoldsById(id);
    console.log(gold);
    gold
      ? response.send(gold)
      : response.status(404).send({ message: "No matching golds found" });
  })
  .delete(async(request,response)=>{
    console.log(request.params);
    const{id}=request.params;
  const result= await deleteGoldsById(id);
  result.deletedCount > 0
  ? response.send(result)
  : response.status(404).send({message:"No matching golds found"})
  })

  .put(async(request,response)=>{
    console.log(request.params);
    const{id}=request.params;
    const data=request.body;
  const result= await updateGoldById(id, data);
  const gold=await getGoldsById(id);
  response.send(gold);
  })

  router
  .route("/")
  .get( async(request, response) => {
    console.log(request.query);
    const filter=request.query;
    console.log(filter);
  
    
  const filterGolds= await getGolds(filter);
    response.send(filterGolds);
  })
  
  .post(async(request,response)=>{
    const data=request.body;
    const result=await createGolds(data);
    response.send(result);
  })
  

  export const goldsRouter=router;