import React, { Component } from 'react';
import './App.css';
import { ClickCounter } from './click-counter/click-counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ClickCounter />
        </header>
      </div>
    );
  }
}

export default App;
