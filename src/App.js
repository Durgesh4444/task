import "./App.css";
import "./Mobile.css";
import Left from "./component/Left";
import Right from "./component/Right";
import { useState } from "react";

function App() {
  const [state, setState] = useState("left remove");

  const [scroll, setScroll] = useState("cards")

  const [silent, setSilent] =useState("")

  const handleChange = () =>{
    setState("left add")
    setScroll("y2")
    setSilent("silent")
  }

  const handleChange2 =()=>{
    setState("left remove")
    setScroll(" ")
    setSilent(" ")
  }

  return (
    <div className="App"> 
      <Left state={state} change2={handleChange2} silent={silent}/>
      <Right change1={handleChange} scroll={scroll} silent={silent} setSilent={setSilent} setScroll={setScroll}/>
    </div>
  );
}

export default App;
