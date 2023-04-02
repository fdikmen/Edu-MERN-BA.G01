// Created by "RCE" snippet
import React, { Component } from 'react'
import EvenCompSubSub from './EvenCompSubSub';

export class EventCompSub extends Component {
    // clickHandler = () => {
    //     //console.log("EventCompSub clickHandler");
    //     //alert("EventCompSub clickHandler");
    //    this.props.setNumber("234 (from EventCompSub)");
    // }
  render() {
    console.log("EventCompSub props",this.props);
    return (
      <div style={{border:"1px solid blue",padding:15,margin:10}}>
        EventCompSub
        <hr/>
        AGE : {this.props.age}
        <br/>
        {/* <button onClick={this.props.setNumber()}>Click(EventCompSub)</button> */}
        {/* <button onClick={this.clickHandler}>Click(EventCompSub)</button> */}
        <EvenCompSubSub setNumber={this.props.setNumber} name="Tommy"/>
        </div>
    )
  }
}

export default EventCompSub