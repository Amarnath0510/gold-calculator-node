import express from "express";
const router=express.Router();
app.get("/golds/:id",async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const gold= await getGoldsById(id);
    console.log(gold);
    gold
      ? response.send(gold)
      : response.status(404).send({ message: "No matching golds found" });
  });
  
  app.post("/golds",async(request,response)=>{
    const data=request.body;
    const result=await createGolds(data);
    response.send(result);
  })
  
  app.get("/golds", async(request, response) => {
    console.log(request.query);
    const filter=request.query;
    console.log(filter);
  
    
  const filterGolds= await getGolds(filter);
    response.send(filterGolds);
  });
  
  app.delete("/golds/:id",async(request,response)=>{
    console.log(request.params);
    const{id}=request.params;
  const result= await deleteGoldsById(id);
  result.deletedCount > 0
  ? response.send(result)
  : response.status(404).send({message:"No matching golds found"})
  });
  
  
  app.put("/golds/:id",async(request,response)=>{
    console.log(request.params);
    const{id}=request.params;
    const data=request.body;
  const result= await updateGoldById(id, data);
  const gold=await getGoldsById(id);
  response.send(gold);
  })