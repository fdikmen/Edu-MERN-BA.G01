// Created by "rce" snippet
import React, { Component } from 'react'

export class ClassComponents extends Component {
    state = {counter:0,title:"Number"}
    increment = () => {
        this.setState({counter:this.state.counter+1})
    }
    decrement = () => {
        this.setState({counter:this.state.counter-1})
    }
  render() {
    console.log("Class Component",this.state)
    return (
      <div>
        <h1>Class Components</h1>
        <p>{this.state.title}</p>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default ClassComponents