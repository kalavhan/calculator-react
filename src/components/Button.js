import React from 'react';
import PropType from 'prop-type';

const Button = ({ name }) => <button type="button">{ name }</button>;

Button.propTypes = {
  name: PropType.string.isRequired,
};

export default Button;
