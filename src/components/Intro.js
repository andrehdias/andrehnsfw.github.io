import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


import '../css/intro.css';

const Header = () => {
  return (
    <section className="intro">
      <h1 className="title">André Dias dos Santos - Front-end Developer</h1>

      <p>
        Hello, I'm André and this is a bit of my story as a developer. Use your
        LEFT
        (<FontAwesome name="long-arrow-left" size="lg" />)
        and
        RIGHT
        (<FontAwesome name="long-arrow-right" size="lg" />)
        arrows to navigate across the timeline using a little version of myself, that I made in pixel art.
      </p>

      <Link to="/timeline">Go to timeline</Link>
    </section>
  );
};

export default Header;
