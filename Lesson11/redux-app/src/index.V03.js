import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';

//Step.01:Reducer function
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { count: state.count + 1 };
    case "counter/decremented":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

//Step.02:Create a store
let myStore = createStore(counterReducer);

//Show the State from myStore
myStore.subscribe(() => console.log("STORE DATA(State List)=>", myStore.getState()));

//Step.03:Create an action & Step.04:Dispatch the action to the store
myStore.dispatch({ type: "counter/incremented" });
myStore.dispatch({ type: "counter/incremented" });
myStore.dispatch({ type: "counter/incremented" });
myStore.dispatch({ type: "counter/decremented" });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
