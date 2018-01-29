import React from 'react';

import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <h1 className="title">André Dias dos Santos - Front-end Developer</h1>

      <div className="links">
        <a target="_blank" href="https://linkedin.com/in/andrediasdossantos/" title="linkedin">
          <FontAwesome name="linkedin-square" size="2x" />
        </a>
        <a target="_blank" href="https://github.com/andrehNSFW" title="github">
          <FontAwesome name="github" size="2x" />
        </a>
        <a target="_blank" href="https://twitter.com/AndrehNSFW" title="twitter">
          <FontAwesome name="twitter" size="2x" />
        </a>
        <a target="_blank" href="https://www.instagram.com/andrehsan/" title="instagram">
          <FontAwesome name="instagram" size="2x" />
        </a>
      </div>
    </header>
  );
};

export default Header;
