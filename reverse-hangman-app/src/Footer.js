import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <nav className="navbar navbar-default fixed-bottom bg-dark navbar-dark">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <span className="navbar-text">Reverse Hangman &copy; 2018 All rights reserved</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Footer;