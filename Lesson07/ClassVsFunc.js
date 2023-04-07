import React, { Component } from 'react';

export default class componentName extends Component {
    /**
     * CLASS ATTRIBUTES
     * Constructor
     * LifeCycle
     * State
     * Method
     * access with this keyword
     */

    addMethod01 = () => { alert("Test") }

    name03(params) {    }
    name04 = (params) => { }

    render() {
        /**
     * JAVASCRIPT CODE
     */
        const addMethod02 = () => { alert("Test") }

        function name01(params) {}
        const name02 = (params) => { }

        return (
            <div> textInComponent
                {/*
                this.addMethod01()
                addMethod02()
                */
                }
                {/* JSX - HTML CODES  */}
            </div>
        );
    }
}


function name(params) {

}

const name = (params) => { }


















import React from 'react'

export default function ClassVsFunc() {
    /**
     * JAVASCRIPT CODE
     */

    const addMethod02 = () => { alert("Test") }

        
    function name01(params) {}
    const name02 = (params) => { }
    
    return (
        <div>ClassVsFunc
            {/* JSX - HTML CODES  */}
            {/*
                addMethod02()
                */
            }
        </div>
    )
}
