import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './HomePage';
import Game from './Game';
import { Switch } from 'react-router';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/game' component={Game} />
        </Switch>
      </Router>
    );
  }
}

export default App;
