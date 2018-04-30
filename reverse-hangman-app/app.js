var express = require('express');
var socket = require('socket.io');

var app = express();
const PORT = process.env.PORT || 8080;


const server = app.listen(PORT, "0.0.0.0", function(){
    console.log('server is running on port: ' + PORT);
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});