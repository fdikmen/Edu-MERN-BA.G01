import React, { Component } from "react";
import LoaderHoc from "./LoaderHOC";

class User extends Component {
  render() {
    //console.log("POST PROPS=>",this.props);    
    // console.log("Post Component Rendering...");
    const userList = {
      border: '1px solid black',
    }
    return (
      <div style={userList}>
        <b>POSTS Data From Wep API</b> <i>(https://jsonplaceholder.typicode.com/users)</i>
        <br />
        {this.props.users.length > 0 && this.props.users.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    );
  }
}

export default LoaderHoc(User, 'users');