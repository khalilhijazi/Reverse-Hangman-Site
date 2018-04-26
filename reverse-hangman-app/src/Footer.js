import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer bg-dark navbar-dark Footer">
                <span className="navbar-text">Reverse Hangman &copy; 2018 All rights reserved</span>
            </footer>
        );
    }
}

export default Footer;