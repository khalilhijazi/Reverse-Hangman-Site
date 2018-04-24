import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="container-fluid Home">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;