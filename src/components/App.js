import React, { useState } from "react";
import FaStar from "react-icons/fa";


function App({ name }){

  return(
    <div className="App">
      <h1>Hello {name}!</h1>
    </div>
  );
}


const createArray = (length) => [...Array(length)];

function Star ( { selected = false, onSelect }){


  return <FaStar color = {selected ? "red" : "green"} 
  onClick={onSelect}/>
}


function StarRating({totalStars}) {
  const [selectedStars, setSelectedStars] = useState(0);

  return <>
  {createArray(totalStars).map((n, i) => (
    <Star 
    key={i} 
    selected={selectedStars > i}
    onSelect={() => setSelectedStars(i+1)}
    />
    
  ))}
  <p>
    {selectedStars} of {totalStars}
  </p>
  </>
}

export default App;
