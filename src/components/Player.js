import React, { Component } from 'react';
import PlayerImage from '../assets/mage_walk.png';
import '../css/player.css';

class Player extends Component {
  constructor() {
    super();

    this.state = {
      stage: null
    };
  }

  render() {
    const style = {
      backgroundImage: `url(${PlayerImage}`
    };

    return (
      <div className="player" style={style}></div>
    );
  }
}

export default Player;
