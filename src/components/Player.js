import React, { Component } from 'react';
import PlayerImage from '../assets/mage_walk.png';
import '../css/player.css';

class Player extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    const style = {
      backgroundImage: `url(${PlayerImage}`
    };

    return (
      <div className={["player", `player--${this.props.direction}`].join(' ')} style={style}></div>
    );
  }
}

export default Player;
