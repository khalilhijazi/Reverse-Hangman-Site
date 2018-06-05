const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const socket = require('socket.io');
const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
res.set('Content-Type', 'application/json');
res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

const server = app.listen(PORT, function () {
console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});

const io = socket(server);
let players = [];
let current_turn = 0;
let _turn = 0;
let player_scores = [];

function next_turn(){
    _turn = ++current_turn % players.length;
    console.log(_turn);
    players[_turn].broadcast.emit('RECEIVE_USERNAME', player_scores[_turn].name);
    players[_turn].emit('YOUR_TURN');
    console.log("player at index: " + _turn);
}


io.on('connection', (socket) => {
    console.log(socket.id + " is now connected");
    players.push(socket);
    player_scores.push({
        socket: socket,
        score: 0,
        name: ''
    });
    console.log(player_scores);

    if (players.length == 1) {
        players[0].emit('YOUR_TURN');
        console.log("I just got fired and turn is: " + _turn);
    }
    
    socket.on('NEXT_PLAYER', function(data){
        if(players[_turn] == socket){
            next_turn();
         }
    });


    socket.on('SEND_SCORE', function(data){
        player_scores[players.indexOf(socket)].score = data.score;
        var scores_sent = player_scores.map(a => (a.name + ": " + a.score));
        io.sockets.emit('RECEIVE_SCORES', scores_sent);
        console.log(scores_sent);
    });

    
    socket.on('PLAYER_NAME_CHOSEN', function(data){
        if (players[_turn] == socket) {
            socket.broadcast.emit('RECEIVE_USERNAME', data);
        }
        player_scores[players.indexOf(socket)].name = data;
    });
    
    socket.on('CHANGE_WORD', function(data){
        io.sockets.emit('RECEIVE_WORD', data);
    });
    
    socket.on('SEND_MESSAGE', function(data){
        io.sockets.emit('RECEIVE_MESSAGE', data);
    });
    
    socket.on('disconnect', function(){
        console.log('A player disconnected');
        var index = players.indexOf(socket);
        players.splice(index,1);
        player_scores.splice(index, 1);
        var scores_sent = player_scores.map(a => (a.name + ": " + a.score));
        io.sockets.emit('RECEIVE_SCORES', scores_sent);

        if (players.length == 0) {
            _turn = 0;
            current_turn = 0;
        }
        console.log("Number of players now ",players.length);
    });
    
    
    
});
