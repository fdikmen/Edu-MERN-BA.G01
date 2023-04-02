import React, { Component } from 'react'

export class EvenCompSubSub extends Component {
    //Created by "CTOR" snippet
    constructor (props) {
        super(props);
        console.log("EvenCompSubSub constructor params=>",props);
        this.clickHandler = props.setNumber.bind(this);
    }
    
    /*clickHandler = () => {
        //console.log("EventCompSub clickHandler");
        //alert("EventCompSub clickHandler");
       this.props.setNumber("6489 (from EventCompSuSub)");
    }*/
  render() {
    return (
      <div style={{border:'1px solid yellow', padding:10}}>EvenCompSubSub
      <br/>
      <button onClick={this.clickHandler}>Click(EventCompSubSub)</button>
      {/* With Arrow Functiom */}
      <button onClick={()=>this.props.setNumber(456)}>Click(EventCompSubSub)</button>
      </div>
    )
  }
}

export default EvenCompSubSub


/**
 * ARROW FUNCTION =>
 * const myFunction = function(params) { alert("Hello" +params); }
 * const myFunction = (params) => { alert("Hello" + params); }
 */