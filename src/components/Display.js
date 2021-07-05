import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <>
    <div style={{ color: 'red' }}>{total}</div>
    <div>{operation}</div>
    <div>{next}</div>
  </>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
Display.defaultProps = {
  total: '0',
  next: null,
  operation: null,
};

export default Display;
