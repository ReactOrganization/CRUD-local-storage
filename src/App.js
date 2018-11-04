import React, { Component } from 'react';
import './App.css';

const magazines = [
  {
    title: 'Magazine 1',
    year: 2017
  },
  {
    title: 'Magazine 2',
    year: 2020
  }
]

localStorage.setItem('magazines', JSON.stringify(magazines));

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
