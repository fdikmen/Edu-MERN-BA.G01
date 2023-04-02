//Created by "RCE" snippet

import React, { Component } from 'react'
import Form from './Form'
import List from './List'

class Contact extends Component {
    //State => The state is an object that holds the data for the component
    state = {
        contacts: [
            { name: "John", phone: "123-456-7890" },
            { name: "Jane", phone: "123-456-7891" },
            { name: "Joe ", phone: "123-456-7892" }]
    }
    
    addContact = (newContact) => {
        this.setState({ contacts: [...this.state.contacts, newContact] })
        /**
         * // const contacts = this.state.contacts
         *    const { contacts } = this.state
         *   const allContacts = contacts.push(newContact)
         *  this.setState({ contacts: allContacts })
         */
    }

    render() {
        return (
            <div  style={{alignContent:'center',alignItems:'center',alignSelf:'center'}}>
                <h1>Phone Book</h1>
                <List  contacts={this.state.contacts}/>
                <Form  addContact={this.addContact}/>
            </div>
        )
    }
}

export default Contact