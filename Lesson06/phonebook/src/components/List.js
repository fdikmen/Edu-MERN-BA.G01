//Created by "RCE" snippet
import React, { Component } from 'react'
import PropsTypes from 'prop-types'

export class List extends Component {
    //PropsTypes => is a way to validate the props passed to a component
    static propTypes = { contacts: PropsTypes.array.isRequired }
    /*DefaultProps => is a way to set default values for the props
    static defaultProps = { contact: [] }*/

    state = { filterText: '', filteredContacts: this.props.contacts }

    onChangeFilterText = (event) => {
        console.log(event.target.value)
        this.props.onChangeFilterText(event.target.value)
    }

    render() {
        console.log("List Props:", this.props)
        return (
            <div className='ListComponent'>
                <input type="text" name='filter' id='filter'
                    placeholder='Filter by name or phone'
                    value={this.state.filterText} onChange={this.onChangeFilterText} />
                <ul>
                    {/* if(this.props.contacts !=null){
                        this.props.contacts.map((contact, index) => {
                            return <li key={index}>
                                <span>{contact.name}</span>
                                <span>{contact.phone}</span>
                            </li>
                        })
                    } */}
                    {this.props.contacts && this.state.filteredContacts.map((contact, index) => {
                        return <li key={index}>
                            <span>{contact.name}</span>
                            <span>{contact.phone}</span>
                        </li>
                    })}
                </ul>

            </div>
        )
    }
}

export default List

