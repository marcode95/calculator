import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import './reset.css';

const Button = ({ buttonName, clickHandler, wide }) => (
  <>
    <button
      type="button"
      onClick={() => clickHandler(buttonName)}
      style={{ width: wide ? '50%' : '25%' }}
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
};

Button.defaultProps = {
  buttonName: 'button',
};

export default Button;
