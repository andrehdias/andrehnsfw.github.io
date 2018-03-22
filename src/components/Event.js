import React, { Component } from 'react';
import '../css/event.css';

import FontAwesome from 'react-fontawesome';

class Event extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  shouldComponentUpdate() { return false; }

  render() {
    const style = {
      top: this.props.position.y + (window.innerHeight / 2),
      left: this.props.position.x,
      '--animation-delay': `${Math.random()}s`
    };

    console.log(this.props)

    return (
      <div className={["event", (this.props.position.y < 0) ? 'event--up' : 'event--down'].join(' ')} style={style}>
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
