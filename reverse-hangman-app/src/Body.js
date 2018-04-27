import React, { Component } from 'react';
import BackgroundImage from './BackgroundImage';
import GamePlay from './GamePlay';
import Feedback from './Feedback';
import About from './About';
import './Body.css';

class Body extends Component {
    render() {
        return(
            <div className="bodyContainer">
                <BackgroundImage />
                <GamePlay />
                <Feedback />
                <About />
            </div>
        );
    }
}

export default Body;
