import React, { Component } from 'react'

export class Counter extends Component {
    state = { number: 0 }
    increment = () => { this.setState({ number: this.state.number + 1 }); }
    decrement = () => { this.setState({ number: this.state.number - 1 }); }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.number}</h2>
                <button onClick={()=>this.decrement()} style={{margin: '5px',}}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter