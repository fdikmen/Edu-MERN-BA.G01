import React from 'react';
import { Counter } from '../features/counter/Counter';
import Users from '../features/users/Users';

function App() {
  return (
    <div>
        <Counter />
        <hr/>
        <Users/>
    </div>
  );
}

export default App;
