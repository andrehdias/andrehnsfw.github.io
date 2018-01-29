import React from 'react';
import {Link} from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import '../css/intro.css';

const Header = () => {
  return (
    <section className="intro">
      <h1 className="title">André Dias dos Santos - Front-end Developer</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Link to="/timeline">Go to timeline</Link>
    </section>
  );
};

export default Header;
