import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createSlice, configureStore} from '@reduxjs/toolkit';

//Step.01:Reducer function
const counterReducer = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count +=1; //state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

//Step.02:Configure a store
const myStore = configureStore({
  reducer: counterReducer.reducer
});

//Step.03:Create an action
const {increment, decrement} = counterReducer.actions;

//Subscribe to the store
myStore.subscribe(() => console.log("STORE DATA(State List)=>", myStore.getState()));

//Step.04:Dispatch the action to the store
myStore.dispatch(increment()); //Count: 1
myStore.dispatch(increment()); //Count: 2
myStore.dispatch(increment()); //Count: 3
myStore.dispatch(decrement()); //Count: 2


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
var number = 10;
number = number + 1;
number += 1;
*/