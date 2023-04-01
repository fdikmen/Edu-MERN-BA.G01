import React, { Component } from 'react'

export class StyleSample extends Component {
    render() {

        const myPstyle = {
            color: 'yellow', backgroundColor: 'dodgerblue'
            , padding: '10px', fontWeight: 'bold', fontFamily: 'Arial'
        };
        const myPstyle2 = { fontSize: '20px', color: 'red' };
        const myMerged = { ...myPstyle, ...myPstyle2 };
        return (
            <div>

                <h1 style={{ color: 'red' }}>StyleSample Component</h1>
                <p style={myPstyle}>Description for StyleSample component. </p>
                <p style={myMerged}>Second Description for StyleSample component. </p>
            </div>
        )
    }
}

export default StyleSample

/**
 * FIRST TYPE=> Inline Style
 * SECOND TYPE=> External Style
 */

/**
 * SPREAD OPERATOR "..."
 * const myArray = [1,2,3,4,5];
 * const myArray2 = [6,7,8,9,10];
 * const mergedArray = [...myArray, ...myArray2];
 */