import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => { // eslint-disable-line
  return (
    <>
      <button type="button">{props.name}</button> {/*eslint-disable-line*/}
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string, // eslint-disable-line
};

export default Button;
