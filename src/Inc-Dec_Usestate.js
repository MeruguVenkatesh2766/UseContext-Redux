import React, { useState } from 'react'

const Inc = () => {
  const[count,setCount]=useState(0)
  const Increment=()=>{
    setCount(count+1)
    return count;
  }
  const Decrement=()=>{
    setCount(count-1)
    return count;
  }
  return (
    <div>
      <center>
      <h2>{count}</h2><br></br>
      <button onClick={Decrement}> Decrement</button>
      <span>     </span>
      <button onClick={Increment}>Increment</button>
      </center>
    </div>
  )
}

export default Inc;
