import React, {Component} from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { Link }from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-default bg-dark navbar-dark navbar-expand-md">
                <Link to="/home" className="navbar-brand"><span>Reverse Hangman</span></Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarmenu">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <HashLink to="#gameRules" className="nav-link"><span>Game Rules</span></HashLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Screenshots</a>
                            </li>
                            <li className="nav-item">
                                <HashLink to="#" className="nav-link"><span>Updates</span></HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="#feedback" className="nav-link"><span>Got Feedback?</span></HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="#aboutMe" className="nav-link"><span>About Me</span></HashLink>
                            </li>
                        </ul>
                </div>
            </nav>
        );
    }
}

export default Header;