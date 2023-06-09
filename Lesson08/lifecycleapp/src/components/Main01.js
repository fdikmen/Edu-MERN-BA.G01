// Created by "RCE" snippet
import React, { Component } from 'react'

export class Main01 extends Component {
    // CLASS ATTRIBUTES

    // CONSTRUCTOR created by "rconst" or "ctor" snippet
    constructor(props) {
        super(props)
        console.log("Main01Comp Constructor(1.) Runned.");
       // console.log("MainComp Props: ", props);
        this.state = {
            // STATE ATTRIBUTES
            name: "Tommy ==> from Main01Comp Name State",
            clickCount: 0
        }
        //console.log("MainComp State: ", this.state);
    };

    // LIFECYCLE METHODS
    // ComponentDidMount created by "cdm" snippet
    componentDidMount() { console.log("Main01Comp ComponentDidMount(3.) Runned."); }

    // ComponentDidUpdate created by "cdup" snippet
    componentDidUpdate(prevProps, prevState) 
    { console.log("Main01Comp ComponentDidUpdate(4.) Runned.");
        //console.log("PREV STATE: ", prevState); 
    }

    // ComponentWillUnmount created by "cwun" snippet
    componentWillUnmount() { console.log("Main01Comp ComponentWillUnmount(5.) Runned."); }

    // getDerivedStateFromProps created by "gdsfp" snippet
    static getDerivedStateFromProps(props, state) {
        console.log("Main01Comp getDerivedStateFromProps(1.1.) Runned.");
        if (props.appNumber % 2 === 0) {
           // console.log("SUCCESS PROPS :", props.appNumber)
            //return {...state,clickCount:props.appNumber}
        }
        else {
            //console.log("FAILED PROPS :", props.appNumber)
        }
        return null;
    }

    //shouldComponentUpdate created by "scu" snippet
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Main01Comp shouldComponentUpdate(2.1.) Runned.");
        console.log("NEXT STATE: ", nextState);
        if (nextState.clickCount > 5) {
            return false; // Not RENDER
        }
        else {
            return true; // RENDER
        }
    }
    //getSnapshotBeforeUpdate created by "gsbu" snippet
    getSnapshotBeforeUpdate = (prevProps, prevState) => 
    {
        console.log("Main01Comp getSnapshotBeforeUpdate(3.1.) Runned.");
        return true; //continue to componentDidUpdate
        //return false; //stop to componentDidUpdate
    }

   /*componentDidUpdate(prevProps, prevState, snapshot) 
    {
        //ANIMATION
    }*/


    render() {
        // JS CODE
        console.log("Main01Comp Render(2.) Runned.");
        //console.log("(RENDER) MainComp Props: ", this.props);
        return (
            <>
                {/* JSX CODE */}
                Main01 Component
                <br />
                Number : {this.state.clickCount}
                <br />
                <button
                    onClick={() => this.setState({ clickCount: this.state.clickCount + 1 })}>
                    Click Me</button>
            </>
        )
    }
}

export default Main01