import React from 'react';
import PropTypes from 'prop-types';

const Display = ({result}) => {
  return (
    <>
      <div>{result}</div> {/*eslint-disable-line*/}
    </>
  );
};

Display.propTypes = {
  result: PropTypes.string
};
Display.defaultProbs = {
  result: '0',
}; 

export default Display;
