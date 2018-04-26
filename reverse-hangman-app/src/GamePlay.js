import React, { Component } from 'react';
import './GamePlay.css';


class GamePlay extends Component {
    render() {
        return(
            <div className="gameplayContainer" id="gameRules">
                <h1 id="rulesTitle">Playing The Game</h1>
                <p id="rulesDescription1">
                    Reverse Hangman is a game of words, very similar to Hangman itself, only 100x better. The way it works is that
                    one person chooses a five letter word every round while others attempt to figure out that word. Each guess the
                    other users give will be evaluated in two ways: (1) the number of letters in their chosen word that match the 
                    game word and (2) the number of letters that are in the correct position respective to the game word. So the 
                    purpose is to get a word that results in a score of 5/5, where the first 5 indicates that their word has five letters 
                    that exist in the game word and the second 5 indicates that all the positions of the letters are correct. Players 
                    will receive a different point ranking based on the speed in which they figure the word out (i.e. first person to 
                    figure it out gets more points than the second person, and so on). The player who selected the word will also receive
                    a certain number of points based on the difficulty of the word he chose (i.e. the longer it takes other players to
                    figure his word out, the more points he piles up). One thing to note is that words chosen must actually be legitimate
                    words. So if a player decides to select something like "blbre" as his word, our system will detect it and notify him
                    that the word he chose is invalid. This game process will repeat for a number of set rounds with each player's 
                    individual round scores adding up, and the player to have ranked up the most points at the end is declared as winner.
                </p>
            </div>
        );
    }
}

export default GamePlay;