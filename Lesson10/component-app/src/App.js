import React, { Component } from 'react'
import axios from 'axios'
import Post from './components/Post'

export class App extends Component {
  state = { posts: {}, loading: true }

  componentDidMount() { this.fetchData() }
  /*fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    this.setState({post: response.data, loading: false})
  }*/

  fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data, loading: false })
      })
      .catch(error => {
        console.log(error)
      }
      )
  }

  render() {
    return (
      <div>App
        <Post {...this.state}></Post>
      </div>
    )
  }
}

export default App
