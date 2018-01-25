import React, { Component } from 'react';

import Player from './Player';

import '../css/timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <Arrow direction="left" />
        <Player />
        <Arrow direction="right" />
      </div>
    );
  }
}

const Arrow = props => <span className={(props.direction === 'left' ? 'arrow arrow-left' : 'arrow arrow-right')}></span>;

export default Timeline;
