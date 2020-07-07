import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => (
      calculate(state, buttonName)
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    const toDisplay = [total, operation, next].filter(Boolean).join('');
    return (
      <div className="calculator">
        <Display
          result={toDisplay.length > 0 ? toDisplay : '0'}
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
