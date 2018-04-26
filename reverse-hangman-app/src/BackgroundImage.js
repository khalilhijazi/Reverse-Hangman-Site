import React, {Component} from 'react';
import './BackgroundImage.css';
import {Link} from 'react-router-dom';

class BackgroundImage extends Component {
    //hello
    render() {
        return(
            <div id="imgContainer">
                <h1 id="title">Reverse Hangman</h1>
                <h2 id="description">Let Your Mind Wander</h2>
                <Link to='/home'><button className="btn btn-default btn-primary">Get Started</button></Link>
            </div>
        );
    }
}

export default BackgroundImage;
