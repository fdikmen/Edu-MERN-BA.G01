// Created by "rfce" snippet
import React, { useState } from 'react'

function FunctionalComponents() {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState("Number")

    const increment = () => {
        setCounter(counter+1)
    }
    const decrement = () => {
        setCounter(counter-1)
    }

    console.log("Func Component",counter,title)
  return (
    <div>
        <h1>Functional Components</h1>
        <p>{title}</p>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default FunctionalComponents