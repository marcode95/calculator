import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import './reset.css';

const Display = ({ total, next, operation }) => (
  <>
    <div className="display">
      <p className="result" style={{ display: (next === null || 0) ? 'block' : 'none' }}>{total}</p>
      <p className="operation">{operation}</p>
      <p className="next">{next}</p>
    </div>
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
