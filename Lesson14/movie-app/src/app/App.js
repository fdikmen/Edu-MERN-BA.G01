import React from 'react';
import logo from '../logo.svg';
import { Divider, Image } from 'semantic-ui-react'
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div>
    {/* <Image src={logo} size='tiny' verticalAlign='middle' />
    <span>Middle Aligned</span>
    <Divider /> */}
    <HomePage/>
  </div>
  );
}

export default App;
