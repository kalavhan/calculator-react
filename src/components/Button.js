import React from 'react';
import PropType from 'prop-types';

const Button = ({ name, wide, color }) => <button type="button" className={`calcButton ${wide ? 'large' : 'standard'} ${color}`}>{ name }</button>;

Button.propTypes = {
  name: PropType.string.isRequired,
  wide: PropType.bool,
  color: PropType.string,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
