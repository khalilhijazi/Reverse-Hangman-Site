import React, { Component } from 'react';
import BackgroundImage from './BackgroundImage';
import GamePlay from './GamePlay';
import Feedback from './Feedback';
import './Body.css';

class Body extends Component {
    render() {
        return(
            <div className="bodyContainer">
                <BackgroundImage />
                <GamePlay />
                <Feedback />
            </div>
        );
    }
}

export default Body;
