import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    <>
      <div>{props.result}</div>
    </>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProbs = {
  result: '0',
};

export default Display;
