import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    <React.Fragment>
      <div>{props.result}</div>
    </React.Fragment>
  );
}

Display.propTypes = {
  result: PropTypes.string
};
Display.defaultProbs = {
  result: '0'
}

export default Display;