import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import New from './New'


const Right = (prop) => {
  const [change, setChange]=useState("createminus")

  const handlechange3 =()=>{
    setChange("createplus")
    prop.setSilent("silent2")
    prop.setSilent2("silent2")
  }

  const handlechange4 =()=>{
    setChange("createminus")
    prop.setSilent("")
    prop.setSilent2("")
  }

  return (
    
    <div className={'right '+prop.silent}>
        <Header change1={prop.change1} silent={prop.silent}/>
        <Main value={handlechange3} scroll={prop.scroll} silent={prop.silent}/>
        <New value={change} value2={handlechange4}/>
    </div>
    
  )
}

export default Right