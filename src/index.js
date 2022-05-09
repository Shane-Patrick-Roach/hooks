import React, { useState, useEffect, useReducer, useRef } from "react";

import ReactDOM from "react-dom";
import { FaStar } from "react-icons/fa";

function App() {
 
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`)
    setSound("");
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Sound..." value={sound} onChange={(e) => setSound(e.target.value)}></input>
      <input type="color" value={color}onChange={(e) => setColor(e.target.value)}></input>
      <button>Add</button>


    </form>
  )
}

ReactDOM.render(

  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById("root")
);
