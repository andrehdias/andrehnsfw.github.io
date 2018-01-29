import React, { Component } from 'react';
import Player from './Player';
import Event from './Event';
import Arrow from './Arrow';

import '../css/timeline.css';

class Timeline extends Component {
  constructor() {
    super();

    this.handleEvents();

    this.state = {
      direction: null
    };
  }

  render() {
    return (
      <div className="timeline">
        <div className="timeline-events">
          <Event title="Born" year="1995" description="I was born!" position={{x: 100, y: 70}} />
          <Event title="First Job!" year="2013" description="My first job as developer" position={{x: 500, y: -240}} />
        </div>

        <div className="timeline-player">
          <Player direction={this.state.direction} />
        </div>

        <div className="timeline-controls">
          {/* <Arrow direction="left" event={() => this.handleArrows("left")} />
          <Arrow direction="right" event={() => this.handleArrows("right")} /> */}
        </div>
      </div>
    );
  }

  handleArrows(direction) { this.setState({ direction }); }

  handleEvents() {
    window.addEventListener('keydown', ev => {
      switch (ev.keyCode) {
        case 37:
          this.setState({ direction: 'left' });
          break;
        case 39:
          this.setState({ direction: 'right' });
          break;
        default:
          this.setState({ direction: 'stop' });
      }
    });

    window.addEventListener('keyup', ev => {
      if ([37, 39].indexOf(ev.keyCode) >= 0)
        this.setState({ direction: 'stop' });
    });
  }
}

export default Timeline;
