import React, {Component} from 'react';
import './BackgroundImage.css';
import Base from './backgroundImage.jpg';
import {Link} from 'react-router-dom';
import Home from './HomePage';
import {Route} from 'react-router-dom/Route';

class BackgroundImage extends Component {

    render() {
        return(
            
                <div id="imgContainer">
                    <img src={Base} id="bgImage" />
                    <Link to='/home'><button className="btn btn-default btn-danger btn-md">Get Started</button></Link>
                </div>
           
        );
    }
}

export default BackgroundImage;
