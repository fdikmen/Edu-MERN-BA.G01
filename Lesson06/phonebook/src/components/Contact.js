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
            { name: "Joe ", phone: "123-456-7892" }],
            filteredContacts: this.state.contacts
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

    addFilter = (newFilter) => {
         //filter the contacts Array.Filter & Array.indexOf
         if (newFilter !== '') {
            const newList = this.state.contacts.filter((contact) => {
                return contact.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1
                    || contact.phone.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1

            })
            this.setState({ filteredContacts: newList })
        }
        else {
            this.setState({ filteredContacts: this.state.contacts })
        }
    }
    render() {
        return (
            <div  style={{alignContent:'center',alignItems:'center',alignSelf:'center'}}>
                <h1>Phone Book</h1>
                <List  contacts={this.state.filteredContacts} addFilter={this.addFilter}/>
                <Form  addContact={this.addContact}/>
            </div>
        )
    }
}

export default Contact