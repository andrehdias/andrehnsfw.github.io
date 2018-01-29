import React from 'react';

import FontAwesome from 'react-fontawesome';
import '../css/arrow.css';

const Arrow = ({direction, event}) => {
  const classes = `arrow arrow-${direction}`;
  const icon = (direction === 'left') ? 'long-arrow-left' : 'long-arrow-right';

  return (
    <span className={classes} onClick={event}>
      <FontAwesome name={icon} size="lg" />
    </span>
  );
};

export default Arrow;
