import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
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
