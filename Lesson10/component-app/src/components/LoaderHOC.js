//Created by "hoc" snippet

import React, { Component } from "react";

/*const LoaderHoc = (WrappedComponent,field) => {
  return class LoaderHoc extends Component {
    render() {        
    console.log("HOC PROPS=>",this.props);
      return  this.props[field].length === 0 ? (
        <div>Loading...</div>
      ) : (
        <WrappedComponent {...this.props}></WrappedComponent>
      );
    }
  };
};*/

const LoaderHoc = (WrappedComponent, field) => {
  return (props) => props[field].length > 0 
  ? (  <WrappedComponent {...props}></WrappedComponent>)
  : (    <div>Loading...</div>  );
}



export default LoaderHoc;