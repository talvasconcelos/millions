import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';

//import components
import GetData from '../../containers/GetData/GetData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <GetData title='Último Sorteio' />
      </div>
    );
  }
}

export default App;
