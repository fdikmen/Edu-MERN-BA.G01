// Created by "RCE" snippet
import React, { Component } from 'react'
import Form from './Form'
import List from './List'

class Contact extends Component {
    // State is an object that holds the data for the component
    state = {
        contacts: [
            { name: "John", phone: "123-456-7890" },
            { name: "Jane", phone: "123-456-7891" },
            { name: "Joe ", phone: "123-456-7892" }]
    }
    
    // Function to add a new contact
    addContact = (newContact) => {
        this.setState({ contacts: [...this.state.contacts, newContact] })
        /**
         * Alternatively, it could be done like this:
         * const { contacts } = this.state
         * contacts.push(newContact)
         * this.setState({ contacts })
         */
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Phone Book</h1>
                <List contacts={this.state.contacts}/>
                <Form addContact={this.addContact}/>
            </div>
        )
    }
}

export default Contact
