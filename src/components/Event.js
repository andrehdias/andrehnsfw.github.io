import React, { Component } from 'react';
import '../css/event.css';

class Event extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    const style = {
      top: this.props.position.y,
      left: this.props.position.x
    };

    return (
      <div className={["event"].join(' ')} style={style}>
        <h3>{this.props.title}</h3>
        <span>{this.props.year}</span>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Event;
