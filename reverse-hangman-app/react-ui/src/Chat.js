import React from "react";
import io from "socket.io-client";
var Stopwatch = require('timer-stopwatch');

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            game_word: '',
            wait_message: '',
            letters_correct: '',
            letters_in_position: '',
            player_score: 0,
            player_words: [],
            scores_list: [],
            round_num: 1,
            round_title: '',
        };
        var timer = new Stopwatch(60000);
        var universal_timer = new Stopwatch(60000);

        
        this.socket = io('https://limitless-depths-91672.herokuapp.com', {transports: ['websocket']});

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        var that = this;
        this.socket.on('YOUR_TURN', function(){
            document.getElementById("wordInputContainer").style.display="block";
        });

        const addMessage = data => {
            console.log(data);
            
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            var letters_correct = 0;
            var letters_in_position = 0;
            for (var i = 0; i < this.state.message.length; i++) {
                if (this.state.game_word.toLowerCase().indexOf(this.state.message.toLowerCase().charAt(i)) > -1) {
                    letters_correct += 1;
                }
                if (this.state.game_word.toLowerCase().charAt(i) === this.state.message.toLowerCase().charAt(i)) {
                    letters_in_position += 1;
                }
            }
            var guesses = this.state.player_words;
            var score = this.state.player_score;
            guesses.push(this.state.message);

            if (letters_correct === 5 && letters_in_position === 5) {
                score += 150;
            }

            this.setState({
                letters_correct: letters_correct.toString(),
                letters_in_position: letters_in_position.toString(),
                player_words: guesses,
                player_score: score
            });

            this.socket.emit('SEND_SCORE', {
                author: this.state.username,
                score: score,
            });

            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message,
                letters_correct: letters_correct.toString(),
                letters_in_position: letters_in_position.toString()
            });

            this.setState({message: ''});

        }
        this.setUsername = ev => {
            ev.preventDefault();
            
            this.socket.emit('PLAYER_NAME_CHOSEN',this.state.username);
            that.socket.emit('SEND_SCORE', {
                author: that.state.username,
                score: that.state.player_score
            });
            document.getElementById("entry_div").style.display="none";
            document.getElementById("second_div").style.display="flex";
            document.getElementById("wait_message").style.display="block";
            this.setState({
                round_title: "Round: " + this.state.round_num
            })
        }

        this.sendGameWord = ev => {
            ev.preventDefault();
            this.socket.emit('CHANGE_WORD', this.state.game_word);
            timer.start();

        }

        this.socket.on('RECEIVE_WORD', function(data){
            //var round = that.state.round_num + 1;
            
            that.setState({
                game_word: data.toString(),
            });
            document.getElementById("wordInputContainer").style.display="none";
            document.getElementById("wait_message").style.display="none";

            universal_timer.start();
        });

        this.socket.on('RECEIVE_USERNAME', function(data){
            that.setState({
                wait_message: data.toString() + " is selecting a word."
            });
            
        });

        this.socket.on('RECEIVE_SCORES', function(data){
            var scores_list = that.state.scores_list;
            var bool = false;
            for (var i = 0; i < scores_list.length; i++) {
                if (scores_list[i].author === data.author) {
                    scores_list[i].score = data.score;
                    bool = true;
                } else {
                    scores_list.splice(i, 1);
                }
            }

            if (bool) {
                that.setState({scores_list: scores_list});
            } else {
                that.setState({scores_list: [...that.state.scores_list, data]});
            }
        });

        timer.onDone(function(){
            console.log('Timer is complete');
            
            timer.reset(60000);
            that.socket.emit('NEXT_PLAYER', this.state.round_num);
            
        });

        universal_timer.onDone(function(){

            that.setState({
                messages: [],
                game_word: '',
            });

            that.socket.emit('SEND_SCORE', {
                author: that.state.username,
                score: that.state.player_score
            });
            that.setState({
                round_num: that.state.round_num + 1,
                round_title: "Round " + that.state.round_num
            });

            universal_timer.reset(60000);
        });
       
    }
    render(){
        return (
            <div className="container" style={{width: '100%', height: '100%'}}>
                <div id="entry_div">
                    <div className="card" >
                        <div className="card-body">
                            <div className="card-title">Enter Your Name</div>
                            <hr/>
                        </div>
                        <div className="card-footer">
                            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                            <br/>
                            <button onClick={this.setUsername} className="btn btn-primary form-control">Send</button>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <h1 style={{textAlign: 'center'}}>{this.state.round_title}</h1>
                </div>
                
                <div className="row" id="second_div" style={{display: 'none'}}>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Players</div>
                                <hr />
                                <div className="player_scores">
                                    {this.state.scores_list.map(progress => {
                                        return (
                                            <div>{progress.author}: {progress.score}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Words Guesses</div>
                                <hr />
                                <span id="wait_message" style={{'display': 'none'}}>{this.state.wait_message}</span>
                                <div className="words">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.message}: {message.letters_correct} / {message.letters_in_position}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                <div id="wordInputContainer" style={{'display': 'none'}}>
                                    <input type="text" placeholder="Word" value={this.state.game_word} onChange={ev => this.setState({game_word: ev.target.value})} className="form-control" />
                                    <br />
                                    <button onClick={this.sendGameWord} className="btn btn-primary form-control">Done!</button>
                                    <br />
                                    <br />
                                </div>
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;