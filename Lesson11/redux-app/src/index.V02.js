import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';

//Step.01:Reducer function
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { count: action.payload.newCount };
    case "counter/decremented":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

//Step.02:Create a store
let myStore = createStore(counterReducer);

//Show the initial state
console.log("STORE DATA-V1=>", myStore.getState());

//Step.03:Create an action
const action01 = { type: "counter/incremented" ,payload: {newCount: 12}};
const action02 = { type: "counter/decremented" };

//Step.04:Dispatch the action to the store
myStore.dispatch(action01);

//show the state after FIRST dispatching the action
console.log("STORE DATA-V2=>", myStore.getState());

myStore.dispatch(action02);

//show the state after SECOND dispatching the action
console.log("STORE DATA-V3=>", myStore.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
