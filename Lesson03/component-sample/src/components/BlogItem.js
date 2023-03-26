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
        let blogHeader = <h1 className="blogTitle" >from Blog Item Component</h1>

        return (
            <div className='blogItemComp'>
                {blogHeader}
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum {5 + 5}</p>
                <p>{5 / 2 === 2.5 ? "YES" : "NO"}</p>
                {/* <label htmlFor="test">Blog Item Label</label> */}
            </div>
        );
    }
}

export default BlogItem;

