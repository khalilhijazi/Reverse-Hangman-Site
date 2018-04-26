import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import BackgroundImage from './BackgroundImage';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './HomePage';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
