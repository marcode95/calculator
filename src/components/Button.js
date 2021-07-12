import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import './reset.css';

const Button = ({
  buttonName, clickHandler, wide, color,
}) => (
  <>
    <button
      type="button"
      onClick={() => clickHandler(buttonName)}
      style={{ width: wide ? '50%' : '25%', backgroundColor: color ? 'orange' : '' }}
    >
      {buttonName}
      {' '}
    </button>
  </>
);

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  buttonName: 'button',
};

export default Button;
