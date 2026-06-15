const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const app = express();
const Port = 3000;


app.use(express.json());
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) =>{
console.log('The user is connected ', socket.id);

socket.on('message', (msg)=>{
console.log('Message Receive', msg);
io.emit('message', msg);
});

socket.on('private', (id,msg)=>{
    console.log('Private message ', id, msg);
    io.to(id).emit('private', msg);
});

io.on('disconnected', () =>{
console.log('disconnected', socket.id);
});
});


server.listen(Port,() =>{
    console.log(`Server is running on port ${Port}`);
});
