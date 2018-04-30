const http = require('http');
var io = require('socket.io');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const server = http.createServer(app).listen(port);
io = require('socket.io')(server);
//io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});