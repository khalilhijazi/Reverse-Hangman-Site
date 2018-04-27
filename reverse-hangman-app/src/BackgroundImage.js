import React, {Component} from 'react';
import './BackgroundImage.css';
import {Link} from 'react-router-dom';

class BackgroundImage extends Component {
    //hello
    render() {
        return(
            <div id="imgContainer">
                <div>
                    <h1 id="title">Reverse Hangman</h1>
                    <h3 id="description">Let Your Mind Wander</h3>
                    <Link to='/home'><button className="btn btn-default">Get Started</button></Link>
                </div>
            </div>
        );
    }
}

export default BackgroundImage;
