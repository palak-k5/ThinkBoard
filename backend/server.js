const express=require('express');
const app=express();

const server=require('http').createServer(app);
const {Server}=require("socket.io");

const io=new Server(server);

//routes
app.get("/",(req,res)=>{
    res.send("This is server for Real time WhiteBoard Application ,ThinkBoard");
})

io.on("connection",(socket)=>{
    console.log("User connected:",socket.id);
})

const port=process.env.port||5000;
server.listen(port,()=>console.log('Server is running http://localhost:'+port))