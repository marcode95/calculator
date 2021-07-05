import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, clickHandler }) => (
  <>
    <button type="button" onClick={() => clickHandler(buttonName)}>
      {buttonName}
      {' '}
    </button>
  </>
);

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: 'button',
};

export default Button;
