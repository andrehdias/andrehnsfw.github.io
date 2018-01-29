import React, { Component } from 'react';
import './css/base.css';
import 'font-awesome/css/font-awesome.css';

import Timeline from './components/Timeline';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Timeline />
      </div>
    );
  }
}

export default App;
