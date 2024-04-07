import express from "express";  

const app = express( );
const port = 3000;

app.get("/",(req,res)=>{

res.send("<h1>Konichiwa?</h1> ");
});


app.listen(port);



