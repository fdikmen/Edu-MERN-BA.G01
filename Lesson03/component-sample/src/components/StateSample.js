import React, { Component } from 'react'

export class StateSample extends Component {
    constructor(props) {
        super(props)
        /*
        //old way (React 15 or before)
        this.state = {name:'Tommy', age:20, address:'Seoul'}*/
    }

    //new way (React 16 or after)
    state = {name:'Tommy', age:20, address:'Seoul'}

    changeAge = () => {
        var currentAge = this.state.age;
        //console.log("Current Age: ",currentAge);
        this.setState({age:currentAge+1});
        /*setTimeout(() => {
            console.log("Next Age: ",this.state.age)
       },1000)*/
    }

    changeName = () => {
        var randomNumber = Math.floor(Math.random()*150);
        this.setState({name:'Tommy Lee - ' + randomNumber});
    }

  render() {
    return (
      <div>
        <h1>StateSample</h1>
        <br/>
        <div>Name: {this.state.name}</div>
        <br/>
        <div>Age: {this.state.age}</div>
        <br/>
        <div>Address: {this.state.address}</div><br/>

        <button onClick={this.changeAge}>Add Age</button><br/>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}

export default StateSample