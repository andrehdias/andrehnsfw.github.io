import React, { Component } from 'react';
import '../css/event.css';

import FontAwesome from 'react-fontawesome';

class Event extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    const style = {
      top: this.props.position.y,
      left: this.props.position.x,
      '--animation-delay': `${Math.random()}s`
    };

    return (
      <div className={["event", (style.top < 0) ? 'event--up' : 'event--down'].join(' ')} style={style}>
        <h3>{this.props.title}</h3>
        <span>
          <FontAwesome name="map-marker" size="lg" /> {this.props.location}
        </span>
        <span>
          <FontAwesome name="calendar" /> {this.props.year}
        </span>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Event;
