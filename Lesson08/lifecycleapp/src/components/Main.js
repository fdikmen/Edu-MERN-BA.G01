// Created by "RCE" snippet
import React, { Component } from 'react'

export class Main extends Component {
    // CLASS ATTRIBUTES

    // CONSTRUCTOR created by "rconst" or "ctor" snippet
    constructor(props) {
        super(props)
        console.log("Main Component Constructor Runned.");
        console.log("Main Component Props: ", props);
        this.state = {
            // STATE ATTRIBUTES
            name :"Tommy ==> from Main Component Name State"
        }
        console.log("Main Component State: ", this.state);
    };




    render() {
        // JS CODE
        return (
            <div>
                {/* JSX CODE */}
                Main Component
                <br/>
                {this.state.name}
            </div>
        )
    }
}

export default Main