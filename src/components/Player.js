import React, { Component } from 'react';
import PlayerImage from '../assets/mage_walk.png';
import '../css/player.css';

const Player = ({direction}) => {
  const style = {
    backgroundImage: `url(${PlayerImage}`
  };

  return (
    <div className={["player", `player--${direction}`].join(' ')} style={style}></div>
  );
};

export default Player;
