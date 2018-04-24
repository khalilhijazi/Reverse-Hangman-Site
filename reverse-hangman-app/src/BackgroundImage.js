import React, {Component} from 'react';
import './BackgroundImage.css';
import Base from './backgroundImage.jpg';
import {Link} from 'react-router-dom';
import Home from './HomePage';
import {Route} from 'react-router-dom/Route';
import './index.css'

class BackgroundImage extends Component {

    render() {
        return(
            
                <div id="imgContainer">
                    <img src={Base} id="bgImage" />
                    <h1 id="title">Reverse Hangman</h1>
                    <Link to='/home'><button className="btn btn-default btn-primary">Get Started</button></Link>
                    <h2 id="description">A Logical Game That's Also Fun</h2>
                </div>
           
        );
    }
}

export default BackgroundImage;
