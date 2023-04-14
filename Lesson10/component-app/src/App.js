import React, { Component } from 'react'
import axios from 'axios'
import Post from './components/Post'
import User from './components/User'

export class App extends Component {
  state = { posts: {},users: {} }

  componentDidMount() { this.fetchPOSTData();this.fetchUSERData() }
  /*fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    this.setState({post: response.data, loading: false})
  }*/

  fetchPOSTData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setTimeout(() => {
          this.setState({ posts: response.data, loading: false })
        }
          , 1000)
      })
      .catch(error => {
        console.log(error)
      }
      )
  }

  fetchUSERData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setTimeout(() => {
          this.setState({ users: response.data, loading: false })
        }
          , 3000)
      })
      .catch(error => {
        console.log(error)
      }
      )
  }

  render() {
    return (
      <div>
        <h1>APP Component</h1>
        <User {...this.state}></User>
        <Post {...this.state}></Post>
      </div>
    )
  }
}

export default App
