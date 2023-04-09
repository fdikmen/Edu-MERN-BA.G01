import React, { Component } from 'react'
import axios from 'axios'

export class AxiosSampleWithInstance extends Component {
    state = { users: [], loading: true, error: null }
    //Created by "cdm" snippet
    componentDidMount() {

        const instance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        this.setState({ loading: true })
        // CALLING THE API
        instance.get('users')
            .then(jsdata => {
                console.log("RESULT:::: ", jsdata)
                this.setState({ users: jsdata.data })
            })
            .catch(err => {
                this.setState({ error: err.message })
            })
            .finally(() => {
                this.setState({ loading: false })
            })

             // CALLING THE API
        instance.get('posts')
        .then(jsdata => {
            console.log("RESULT-posts:::: ", jsdata)
        })
        .catch(err => {
            this.setState({ error: err.message })
        })
        .finally(() => {
            this.setState({ loading: false })
        })

         // CALLING THE API
         instance.get('todos')
         .then(jsdata => {
             console.log("RESULT-todos:::: ", jsdata)
         })
         .catch(err => {
             this.setState({ error: err.message })
         })
         .finally(() => {
             this.setState({ loading: false })
         })
    }
    render() {
        return (
            <div>
                <h2>
                    Fetching data from an API with <i>AXIOS Method</i>
                </h2>
                {this.state.loading && <h2>Loading...</h2>}
                {this.state.error && <h2>{this.state.error}</h2>}
                <table>
                    {this.state.users && this.state.users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td style={{ border: '1px solid red' }}>{user.id}</td>
                                <td style={{ border: '1px solid red' }}>{user.name}</td>
                                <td style={{ border: '1px solid red' }}>{user.email}</td>
                                <td style={{ border: '1px solid red' }}>{user.phone}</td>
                            </tr>
                        )
                    })
                    }
                </table>

                <hr />
            </div>
        )
    }
}

export default AxiosSampleWithInstance