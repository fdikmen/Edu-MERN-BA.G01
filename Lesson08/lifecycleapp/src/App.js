import logo from './logo.svg';
import './App.css';
import Main01 from './components/Main01'
import React, { Component } from 'react'
import Main02 from './components/Main02.js';

export class App extends Component {
  state = { show: true }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>
          <hr style={{width:'80%'}}/>

          {this.state.show ? <Main01 appNumber="12"/> : <Main02 />}
        </header>
      </div>
    )
  }
}

export default App
