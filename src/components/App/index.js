import React, { Component } from 'react';
import './App.css';

import 'whatwg-fetch';
import Series from '../../Containers/Series';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="">My First App</h1>
        </header>

        <Series></Series>
      </div>
    );
  }
}

export default App;
