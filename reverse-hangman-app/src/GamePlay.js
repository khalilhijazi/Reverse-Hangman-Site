import React, { Component } from 'react';
import './GamePlay.css';


class GamePlay extends Component {
    render() {
        return(
            <div className="gameplayContainer" id="gameRules">
                <h2 id="rulesTitle">Playing The Game</h2>
                <p id="rulesDescription1">
                    Reverse Hangman is a game of words, very similar to Hangman itself, only 100x better. The way it works is that
                    one person chooses a five letter word every round while others attempt to figure out that word. Each of the
                    users' guesses will be evaluated in two ways: (1) the number of letters in their chosen word that match the 
                    game word and (2) the number of letters that are in the correct position respective to the game word. Be quick!
                    The faster you guess a word, the more points you receive.
                </p>
                <p id="rulesDescription1">
                    The player who selected the word will also receive a certain number of points based on the difficulty of the word
                    he chose. One thing to note is that words chosen must actually be legitimate words. Our system will check for this 
                    and notify players of invalid words. This game process will repeat for multiple rounds with each player's round 
                    scores piling up. The player with the most points at the end is the winner.
                </p>
            </div>
        );
    }
}

export default GamePlay;