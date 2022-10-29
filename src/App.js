import React, { useState } from 'react'
import Ab from './Inc-Dec_Usecontext'

export const user=React.createContext()

const App = () => {
  const[c,setC]=useState(0)
  const[a,setA]=useState("Hello")
  const us={
    name:'Venky',
    age:'22'
  }
  return (
    <div>
      <h2>Merugu Venkatesh</h2>
      <div>
        <p>Hiiiii</p>
      </div>
      <user.Provider value={{c,setC,a,setA,us}}>
        <Ab/>
      </user.Provider>
    </div>
  )
}

export default App
