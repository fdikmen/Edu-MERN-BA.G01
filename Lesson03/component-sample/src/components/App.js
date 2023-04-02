import logo from '../logo.svg';
import '../App.css';
import BlogMain from './BlogMain';
import React from 'react';
import StyleSample from './StyleSample';
import StyleSample02 from './StyleSample02';
import EventComp from './EventComp';
import StateSample from './StateSample';
import Counter from './Counter';

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <BlogMain /> */}
          {/* <StyleSample/> */}
          {/* <StyleSample02/> */}
          {/* <EventComp/> */}
          {/* <StateSample/> */}
          <Counter/>
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