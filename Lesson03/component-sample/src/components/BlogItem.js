//upperCamelCase --->  Sample : BlogItem ---> Component Name
//lowerCamelCase --->  Sample : blogItem

/*import React from 'react';

class BlogItem extends React.Component
{
    
}*/
/*
//standart style if else
if (5/2 === 2.5) {
    return "YES";
} else {
    return "NO"
}
//inline style if else
5/2 === 2.5 ? "YES" : "NO"

*/


import React, { Component } from 'react';

class BlogItem extends Component {
    render() {
        let blogHeader = <h1 className="blogTitle" >{this.props.title}</h1>

        console.log("BlogItem Component All Props:", this.props);
        return (
            <div className='blogItemComp'>
                {blogHeader}
                <p>{this.props.description} </p>
                {/* <p>Lorem Ipsum {5 + 5}</p> */}
                {/* <p>{5 / 2 === 2.5 ? "YES" : "NO"}</p> */}
                {/* <label htmlFor="test">Blog Item Label</label> */}
            </div>
        );
    }
}

export default BlogItem;

