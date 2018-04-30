const express = require('express');
const app = express();
const socket = require('socket.io');
const Server = require('http').Server(app);

const PORT = process.env.PORT || 8080;


const server = Server.listen(PORT, "0.0.0.0", function(){
    console.log('server is running on port: ' + PORT);
});

io = socket(server);

app.use( express.static(__dirname + "./build") );
io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});