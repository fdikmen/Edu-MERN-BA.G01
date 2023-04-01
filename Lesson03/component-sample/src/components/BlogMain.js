//Created by: RCE snippet

import React, { Component } from 'react'
import BlogItem from './BlogItem';
import BlogTest from './BlogTest';

export class BlogMain extends Component {
    render() {
        const title = "ReactJS From app.js";
        let blogInfo = [
            { textHeader: "Blog Header 1", textBody: "Blog Body 1" },
            { textHeader: "Blog Header 2", textBody: "Blog Body 2" },
            { textHeader: "Blog Header 3", textBody: "Blog Body 3" },
            { textHeader: "Blog Header 4", textBody: "Blog Body 4" },
            { textHeader: "Blog Header 5", textBody: "Blog Body 5" },
            { textHeader: "Blog Header 6", textBody: "Blog Body 6" },
        ];
        return (
            <div>
                <h1>Blog Main Component</h1>

                <BlogTest

                    blogObject={{
                        id: 1, title: "Blog Title",
                        description: "Blog Description"
                    }}

                    blogArray={[1, 2, 3]}

                    blogtitle={title} age={123}

                    name="FirstName LastName"

                    subtitle="Subtitle from App.js"
                ></BlogTest>

                {/* <BlogItem></BlogItem> */}
                {/* <BlogItem title={blogInfo[0].textHeader}
  description={blogInfo[0].textBody} />

<BlogItem title={blogInfo[1].textHeader}
  description={blogInfo[1].textBody} />

<BlogItem title={blogInfo[2].textHeader}
  description={blogInfo[2].textBody} />
  
<BlogItem title={blogInfo[3].textHeader}
  description={blogInfo[3].textBody} /> */}

                {/*with Array MAP */}
                {/* {blogInfo.map(function(item,index)
  {
    return <BlogItem title={item.textHeader}
    description={item.textBody} key={index}/>
  })} */}
            </div>
        )
    }
}

export default BlogMain


/*
// Array MAP SUMMARY
const SampleArray = ["a", "b", "c", "d", "e"];
//[ArrayName].map(function(currentValue, index, arr){});
// currentValue = current element being processed in the array.
// index = index of the current element being processed in the array.
// arr = the array map was called upon.

SampleArray.map(function(item,index,allData)
{
  console.log("ArrayItem=>",item,index,allData)
});
*/


/*class [CLASSNAME] {

  constructor() {}
  // Constructor is called when the class is initialized

}
*/
