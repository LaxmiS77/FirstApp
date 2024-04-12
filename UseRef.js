// // useRef -  creates a mutable varibale which will not re-render the page 
// // used to manipulate the DOM elements  .

//  //  const name = useRef(initialvalue)


// // import React, { useRef } from 'react'

// // function UseRef() {
// //     const name = useRef()
// //     const getName = ()=>{
// //         name.current.value = 'Laxmi'
// //         name.current.style.color = 'blue'
// //     }
// //   return (
// //     <div>
// //         <h1> Dom elements manipulation in useRef hook </h1>
// //         <input type='text' ref={name}/>
// //         <button onClick={()=>getName()}>getEle</button>
// //     </div>
// //   )
// // }

// // export default UseRef;

// import React, { useEffect, useState,useRef } from 'react'

// function UseRef() {
//     const[count,setCount] = useState()
//     const counter = useRef(0)

//     useEffect(()=>{
//         // setCount(count+1)
//         counter.current = counter.current+1

//     })
//   return (
//     <div>
//         <h1>Re-rendering in useRef</h1>
//         <h4>count:{counter.current}</h4>
//         <input type='text'value={count} onChange={(e)=>setCount(e.target.value)}/>
//     </div>
//   )
// }

// export default UseRef

import React, { useEffect, useRef } from 'react'

function UseRef() {
 const name = useRef();

 const getName=()=>{
   name.current.value = 'Laxmi'
   name.current.style.color = 'violet'
 }
   
  return (
    <div>
      <h1>UseRef hook...</h1>
      <input type='text' ref={name}/>
      <button onClick={getName}>Add</button>
    </div>
  )
}

export default UseRef