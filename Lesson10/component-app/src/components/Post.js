import React, { Component } from "react";
import LoaderHoc from "../components/LoaderHOC";

class Post extends Component {
  render() {
    // console.log("POST PROPS=>",this.props);    
    // console.log("Post Component Rendering...");
    return (
      <div className="userList">
        <b>POSTS Data From Wep API</b> <i>(https://jsonplaceholder.typicode.com/posts)</i>
        <br/>
        {this.props.posts.length>0 && this.props.posts.map((post) => <div key={post.id}>{post.title}</div>)}
      </div>
    );
  }
}

export default LoaderHoc(Post,'posts');