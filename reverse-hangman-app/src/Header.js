import React, {Component} from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-default bg-dark navbar-dark navbar-expand-md">
                <a className="navbar-brand" href="#">Reverse Hangman</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarmenu">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="#gameRules" className="nav-link"><span>Game Rules</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Screenshots</a>
                            </li>
                            <li className="nav-item">
                                <Link to="#feedback" className="nav-link"><span>Got Feedback?</span></Link>
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
        );
    }
}

export default Header;