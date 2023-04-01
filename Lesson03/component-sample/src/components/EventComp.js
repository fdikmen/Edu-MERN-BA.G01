// Created by "RCE" snippet
import React, { Component } from 'react'
import EventCompSub from './EventCompSub';

export class EventComp extends Component {
  
  setNumber = (num) => {
    console.log('App Clicked from EventComp. Number is :' + num);
    alert('App Clicked From EventComp. Number is :' + num);
  }
  
  clickHandler() {
    console.log('Button Clicked');
    alert('Button Clicked');
  }
  //testFromClassFiled = "testFromClassFiled defined in EventComp"
  render() {
    //const testFromJSXField = "testFromJSXField defined in render function"
    return (
      <div style={{ border: '1px solid red', padding: 35 }}>EventComp
        {/* <p>{this.testFromClassFiled}</p>
        <br/>
        <p>{testFromJSXField}</p> */}
        <br />
        <button onClick={this.clickHandler}>Click(EventComp)</button>

        <EventCompSub age={21} setNumber={this.setNumber}/>
      </div>
    )
  }
}

export default EventComp


/**
 Why we need to use "this" keyword in class?
    1. We need to use "this" keyword to access the class fields and methods.
export class EventComp extends Component {
    ----> CLASS DEFINITION SECTON ---- Sample; constructor, render,function, etc.
  render() {
    ---> JSX CODE(JAVASCRIPT) SECTION ---- Sample; const, var, let, function, if, for, while, switch, etc.
    return (
      <div>EventComp</div>
    )
  }
}
 */





