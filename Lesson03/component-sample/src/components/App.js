import logo from '../logo.svg';
import '../App.css';
import BlogMain from './BlogMain';
import React from 'react';

/**
 * import => import a module from another file
 * extends => extends a class from another class
 * super() => calls the method property of the parent method
 */

class App extends React.Component {
  constructor() {
    super();
    console.log("App Constructor Running");
  }
  render() {
    const myPstyle = {
      color: 'yellow', backgroundColor: 'dodgerblue'
      , padding: '10px',fontWeight:'bold', fontFamily: 'Arial'
    };
    const myPstyle2 = { fontSize: '20px',color: 'red'};
    const myMerged = { ...myPstyle, ...myPstyle2 };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: 'red' }}>App Component</h1>
          <p style={myPstyle}>Description for App component. </p>
          <p style={myMerged}>Second Description for App component. </p>
          {/* <BlogMain /> */}
        </header>
      </div>
    );
  }
}

export default App;

/*class [CLASSNAME] {
  constructor() {}
  // Constructor is called when the class is initialized
}
*/


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