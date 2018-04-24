import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-default fixed-top bg-dark navbar-dark navbar-expand-md">
                    <a className="navbar-brand" href="#">Reverse Hangman</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarmenu">
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Game Rules</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Screenshots</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Got Feedback?</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Contact Us</a>
                                </li>
                            </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;