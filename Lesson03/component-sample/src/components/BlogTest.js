// with 'rcc' snippet
/*import React, { Component } from 'react'

export default class BlogTest extends Component {
  render() {
    return (
      <div>BlogTest</div>
    )
  }
}
*/

// with 'rce' snippet
import React, { Component } from 'react'

export class BlogTest extends Component {
  render() {
    return (
      <div>BlogTest <br/>
      {this.props.blogtitle} <br/>
      {this.props.age}<br/>
      {this.props.name}<br/>
      {this.props.subtitle}
      </div>
    )
  }
}

export default BlogTest