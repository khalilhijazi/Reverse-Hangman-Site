import React, {Component} from 'react';
import './BackgroundImage.css';
import {Link} from 'react-router-dom';
import Home from './HomePage';
import {Route} from 'react-router-dom/Route';


class BackgroundImage extends Component {

    render() {
        return(
            <div id="imgContainer">
                <div id="bgContents">
                    <h1 id="title">Reverse Hangman</h1>
                    <h2 id="description">Let Your Mind Wander Away</h2>
                    <Link to='/home'><button className="btn btn-default btn-primary">Get Started</button></Link>
                </div>
            </div>
        );
    }
}

export default BackgroundImage;
