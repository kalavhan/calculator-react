import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

const App = () => (
  <div className="calculator">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
