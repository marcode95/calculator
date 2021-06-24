import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <React.Fragment>
      <button>{props.name}</button>
    </React.Fragment>
  );
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;