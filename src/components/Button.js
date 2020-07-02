import React from 'react';
import PropType from 'prop-types';

const Button = ({ buttonName, wide, color }) => <button type="button" className={`calcButton ${wide ? 'large' : 'standard'} ${color}`}>{ buttonName }</button>;

Button.propTypes = {
  buttonName: PropType.string.isRequired,
  wide: PropType.bool,
  color: PropType.string,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
