import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
const Big = require('big.js');

class Num extends React.Component {
  render() {
    return (
    <h2>{this.props.value}</h2>
    )
  }
}

Num.defaultProps = {
  value: 0
};

Num.propTypes = {
  value: PropTypes.number.isRequired
};

ReactDOM.render(
    <Num value={Number(Big(0.4).minus(0.1))}/>,
  document.getElementById('root')
);
