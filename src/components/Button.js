import React from 'react';
import PropType from 'prop-types';

const Button = ({ name, elmntClass }) => <button type="button" className={`calcButton ${elmntClass}`}>{ name }</button>;

Button.propTypes = {
  name: PropType.string.isRequired,
};

export default Button;
