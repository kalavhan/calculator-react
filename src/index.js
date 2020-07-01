import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const Big = require('big.js');

const Num = ({ value }) => <h2>{value}</h2>;

Num.propTypes = {
  value: PropTypes.number.isRequired,
};

ReactDOM.render(
  <Num value={Number(Big(0.4).minus(0.1))} />,
  document.getElementById('root'),
);
