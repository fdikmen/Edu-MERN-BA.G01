import React, { Component } from 'react'
import FetchSample from './components/FetchSample'
import AxiosSample from './components/AxiosSample'

export class App extends Component {
  render() {
    return (
      <div><h1>FETCH LESSON</h1>
        <hr />
        <FetchSample />
        <AxiosSample/>
      </div>
    )
  }
}

export default App