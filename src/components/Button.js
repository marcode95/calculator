import React from 'react';
import PropTypes from 'prop-types';

const Button = ({buttonName}) => { // eslint-disable-line
  return (
    <>
      <button type="button">{buttonName}</button> {/*eslint-disable-line*/}
    </>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired, // eslint-disable-line
};

export default Button;
