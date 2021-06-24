import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name}) => { // eslint-disable-line
  return (
    <>
      <button type="button">{name}</button> {/*eslint-disable-line*/}
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string, // eslint-disable-line
};

export default Button;
