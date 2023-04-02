import React, { Component } from 'react'

export class Counter extends Component {
    state = { number: 0 }
    increment = () => { this.setState({ number: this.state.number + 1 }); }
    decrement = () => { this.setState({ number: this.state.number - 1 }); }
    render() {
        const buttonStyle = {margin: '5px',cursor:'pointer',
        padding: '5px 30px',border: '1px solid #ccc',borderRadius: '15px'}
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.number}</h2>
                <button onClick={()=>this.decrement()} style={buttonStyle}>-</button>
                <button onClick={this.increment} style={buttonStyle}>+</button>
            </div>
        )
    }
}

export default Counter