import React, { Component } from 'react';

import { Application, Spritesheet } from 'pixi.js';

class Player extends Component {
  constructor() {
    super();

    this.state = {
      stage: null
    };
  }

  componentDidMount() {
    const app = new Application(window.innerWidth, window.innerHeight, '#stage');

    this.setState({
      stage: app.stage
    });
  }

  render() {
    return (
        <canvas id="stage"></canvas>
    );
  }
}

export default Player;
