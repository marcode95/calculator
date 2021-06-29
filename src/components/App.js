import '../App.css';
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);

    if (typeof result === 'string') {
      this.setState({
        total: result,
      });
    } else {
      this.setState({
        total: result.total,
        next: result.next,
      });
    }
  }

  render() {
    const { total } = this.state;
    return (
      <div className="App">
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
