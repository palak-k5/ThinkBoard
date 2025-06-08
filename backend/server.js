const express=require('express');
const app=express();

const server=require('http').createServer(app);
const io=require("socket.io")(server);


//routes
app.get("/",(req,res)=>{
    res.send("This is server for Real time WhiteBoard Application");
})

const port=process.env.port||5000;
server.listen(port,()=>console.log('Server is running http://localhost:'+port))