import "./App.css";
import "./Mobile.css";
import "./ipad.css"
import Left from "./component/Left";
import Right from "./component/Right";
import { useState } from "react";

function App() {
  const [state, setState] = useState("left remove");

  const [scroll, setScroll] = useState("cards")

  const [silent, setSilent] =useState("")

  const [silent2, setSilent2] = useState(" ")

  const handleChange = () =>{
    setState("left add")
    setScroll("y")
    setSilent("silent")
    setSilent2("silent2")
  }

  const handleChange2 =()=>{
    setState("left remove")
    setScroll(" ")
    setSilent(" ")
  }

  return (
    <div className="App"> 
      <Left state={state} change2={handleChange2} silent2={silent2}/>
      <Right change1={handleChange} scroll={scroll} silent={silent} setSilent2={setSilent2} setSilent={setSilent} setScroll={setScroll}/>
    </div>
  );
}

export default App;
