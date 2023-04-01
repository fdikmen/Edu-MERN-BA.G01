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
import PropTypes from 'prop-types'

export class BlogTest extends Component {
  static propTypes = { blogtitle: PropTypes.string.isRequired,
    age: PropTypes.number,
  blogArray: PropTypes.array.isRequired,

  blogObject: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
   }).isRequired

  };
  render() {
    console.log("BlogTest Props: ", this.props)
    return (
      <div>BlogTest <br /><br /><br />
        Blog Title : {this.props.blogtitle}
        <hr/>
        Age : {this.props.age}<hr/>
        Name : {this.props.name}<hr/>
        Subtitle : {this.props.subtitle}
      </div>
    )
  }
}

export default BlogTest