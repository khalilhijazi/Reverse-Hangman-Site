import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
import Body from './Body.js';

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default Home;