import React, { useReducer } from 'react'

const initialState = 0
const reducer = (action,state)=>{
     switch (action) {
        case "Increment" :return state + 1
        case "Decrement":return state - 1
        
    }

}

function UseReducer() {
    const [count,dispatch] = useReducer(initialState,reducer)

  return (
    <div>
        <h1>This is Counter using UseReducer</h1>
        <h2>Counter: {count}</h2>
        <button onClick={()=>dispatch("Increment")}> Add</button>
        <button onClick={()=>dispatch("Decrement")}> Sub</button>

    </div>
  )
}

export default UseReducer