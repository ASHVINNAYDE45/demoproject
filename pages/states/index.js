import React, { useState } from "react";

function Counter() {
    const[count,setCount]=useState(0);
 

    const handleIncrement=()=>{
        setCount(count+1);
    };
    const handleDecrement=()=>{
        setCount(count-1);

    };
  return(
    <center>
    <div>
    <div> Count:{count}</div>
     <button onClick={handleIncrement}>Click</button>
     <button onClick={handleDecrement}>Click</button>
    </div>
    </center>
  ) ;
  
}

export default Counter;
