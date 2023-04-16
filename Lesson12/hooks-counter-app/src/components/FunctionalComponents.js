// Created by "rfce" snippet
import React, { useEffect, useState } from 'react'

function FunctionalComponents() {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState("Number")

    const increment = () => {
        setCounter(counter+1)
    }
    const decrement = () => {
        setCounter(counter-1)
    }

    //like LIFE CYCLE METHODS
    useEffect(() => {
        console.log("Func ComponentDidMount with UseEffect01")
        return () => {
            console.log("Func ComponentWillUnmount with UseEffect01")
        }
    }, [])

    useEffect(() => {
        console.log("Func ComponentDidUpdate with UseEffect02")
    }, [counter,title])
    

   //console.log("Func Component",counter,title)
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