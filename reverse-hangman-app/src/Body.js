import React, { Component } from 'react';
import BackgroundImage from './BackgroundImage';
import './Body.css';

class Body extends Component {
    render() {
        return(
            <div className="bodyContainer">
                <BackgroundImage />
            </div>
        );
    }
}

export default Body;
