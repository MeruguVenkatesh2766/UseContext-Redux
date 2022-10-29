import React, { useContext } from 'react'
import { user } from './App';

const Ab = () => {
  const {c,a,setC,setA,us}=useContext(user)
  return (
    <div>
      <center>
        {a}<br></br>
        <button onClick={()=>setA("Let's Start")}>Ready</button><br></br>
      <h2>{c}</h2>
      <button onClick={()=>setC(c-1)}>Decrement</button>
      <button onClick={()=>setC(c+1)}>Increment</button><br></br>
      <h4>Created by {us.name}</h4>
      </center>
    </div>
  )
}

export default Ab;
