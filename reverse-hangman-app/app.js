var express = require('express');
var socket = require('socket.io');

var app = express();
const PORT = process.env.PORT || 8080;


var server = require('http').createServer(app).listen(PORT);

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});