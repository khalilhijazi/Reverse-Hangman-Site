
const socketIO = require('socket.io');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port);
const io = socketIO(server);
//io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});