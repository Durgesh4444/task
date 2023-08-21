import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import New from './New'



const Right = (prop) => {
  const [change, setChange]=useState("createminus")

  const [adjust, setAdjust]=useState("")
  const handlechange3 =()=>{
    setChange("createplus")
    prop.setSilent("silent")
    prop.setSilent2("silent2")
    setAdjust("adjust")
  }

  const handlechange4 =()=>{
    setChange("createminus")
    prop.setSilent("")
    prop.setSilent2("")
    setAdjust("")
  }

  return (
    
    <div className={'right '+prop.silent + " " + adjust}>
        <Header change1={prop.change1} silent={prop.silent}/>
        <Main value={handlechange3} scroll={prop.scroll} silent={prop.silent}/>
        <New value={change} value2={handlechange4}/>
    </div>
    
  )
}

export default Right