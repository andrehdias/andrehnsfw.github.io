import React, { Component } from 'react';
import Player from './Player';
import FontAwesome from 'react-fontawesome';

import '../css/timeline.css';
import 'font-awesome/css/font-awesome.css';

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
        <Arrow direction="left" event={() => this.handleArrows("left")} />
        <Player direction={this.state.direction} />
        <Arrow direction="right" event={() => this.handleArrows("right")} />
      </div>
    );
  }

  handleArrows(direction) { this.setState({ direction }); }

  handleEvents() {
    window.addEventListener('keydown', ev => {
      switch(ev.keyCode) {
        case 38:
          this.setState({ direction: 'up' });
          break;
        case 40:
          this.setState({ direction: 'down' });
          break;
        case 37:
          this.setState({ direction: 'left' });
          break;
        case 39:
          this.setState({ direction: 'right' });
          break;
      }
    });
  }
 }

const Arrow = props => {
  const classes = `arrow arrow-${props.direction}`;
  const icon = (props.direction === 'left') ? 'long-arrow-left' : 'long-arrow-right';

  return (
    <span className={classes} onClick={props.event}>
      <FontAwesome name={icon} size="lg" />
    </span>
  );
};

export default Timeline;
