//Created by RCE snippet
import React, { Component } from 'react'

export class StyleSample02 extends Component {
  render() {
    const box ={
        color:'green',
        fontSize:'20px',
    }
    const shadow ={
        background:'orange',
        boxShadow:'1px 1px 1px 1px #cccd',
        borderRadius:'5px',
        paddingLeft: '10px',
        paddingRight: 10,

    }
        return (
      <div>
        <div style={{...box,...shadow}}>
        <h1>StyleSample02.1</h1>
      </div>
      <div style={{...box,color:'red'}}>
        <h1>StyleSample02.2</h1>
      </div>

      <div style={Object.assign({},box,shadow)}>
        <h1>StyleSample02.3</h1>
      </div>
      </div>
    )
  }
}

export default StyleSample02

/**
 * LOWER CAMEL CASE --------> font-family -> fontFamily , font-size -> fontSize , background-color -> backgroundColor
 * - fontSize , wordaWordbWordc
 * UPPER CAMEL CASE
 * - FontSize , WordaWordbWordc
 */

/**
 * Object.assign() -> Object.assign(target, ...sources)
 * target -> Object.assign({},obj1,obj2,obj3)
 */