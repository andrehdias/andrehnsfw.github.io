import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './css/base.css';
import 'font-awesome/css/font-awesome.css';

import Timeline from './components/Timeline';
import Header from './components/Header';
import Intro from './components/Intro';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <div className="wrapper">
                <Intro/>
              </div>
            </Route>
            <Route exact path="/timeline">
              <div className="wrapper">
                <Header />
                <Timeline />
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
