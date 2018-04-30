import React, { Component } from 'react';
import './Game.css';
import Header from './Header';
import Chat from './Chat';

class Game extends Component {

    render() {
        return(
            <div className="Game">
                <Header />
                <div id="gameBackground">
                    <div id="gameContainer">
                        <Chat />
                    </div>
                </div> 
            </div>
        );
    }
}

export default Game;