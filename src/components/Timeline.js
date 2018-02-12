import React, { Component } from 'react';
import Player from './Player';
import Event from './Event';

import events from '../events';

import '../css/timeline.css';

class Timeline extends Component {
  constructor() {
    super();

    this.handleEvents();

    this.$events = [];
    this.events = events.sort((a, b) => a.position.x > b.position.x);
    this.timelineWidth = this.events[this.events.length - 1].position.x + 250;
    this.translateLimit = (this.timelineWidth - 250) * -1;

    this.state = {
      direction: null,
      translateX: 0,
      isMoving: false
    };
  }

  render() {
    const style = {
      transform: `translate3d(${this.state.translateX}px, 0, 0)`,
      width: this.timelineWidth
    };

    return (
      <div className={['timeline', (!this.state.isMoving) ? 'timeline--stop' : ''].join(' ')}>
        <div className="timeline-events" style={style}>
          {events.map(event => {
            return (
              <Event ref={input => this.$events.push(input)} key={event.title} title={event.title} location={event.location} description={event.description} position={event.position}/>
            )
          })}
        </div>

        <div className="timeline-player">
          <Player direction={this.state.direction} />
        </div>
      </div>
    );
  }

  handleArrows(direction) { this.setState({ direction }); }

  handleEvents() {
    window.addEventListener('keydown', ev => {
      let newTranslateX;

      switch (ev.keyCode) {
        case 37:
          newTranslateX = this.state.translateX + 30;

          this.setState({
            direction: 'left',
            translateX: (newTranslateX >= 0) ? 0 : newTranslateX,
            isMoving: true
          });
          break;
        case 39:
          newTranslateX = this.state.translateX - 30;

          this.setState({
            direction: 'right',
            translateX: (newTranslateX <= this.translateLimit) ? this.translateLimit : newTranslateX,
            isMoving: true
          });
          break;
        default:
          this.setState({
            direction: 'stop',
            isMoving: false
          });
      }
    });

    window.addEventListener('keyup', ev => {
      if ([37, 39].indexOf(ev.keyCode) >= 0) {
        this.setState({
          direction: 'stop',
          isMoving: false
        });
      }
    });
  }
}

export default Timeline;
