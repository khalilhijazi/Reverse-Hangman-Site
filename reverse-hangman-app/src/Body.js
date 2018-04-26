import React, { Component } from 'react';
import BackgroundImage from './BackgroundImage';
import GamePlay from './GamePlay';
import './Body.css';

class Body extends Component {
    render() {
        return(
            <div className="bodyContainer">
                <BackgroundImage />
                <GamePlay />
            </div>
        );
    }
}

export default Body;
