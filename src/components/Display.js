import React from 'react';
import PropTypes from 'prop-types';

const Display = ({result}) => { // eslint-disable-line
  return (
    <>
      <div>{result}</div> {/*eslint-disable-line*/}
    </>
  );
};

Display.propTypes = {
  result: PropTypes.string, // eslint-disable-line
};
Display.defaultProbs = {
  result: '0',
};

export default Display;
