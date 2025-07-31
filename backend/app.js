const express=require("express");
const app=express();

app.get("/home",(reqe,res)=>{
    res.json({me"Hello world"});
})

app.listen(8000,()=>{
    console.log("Server listening on port 8000");
})