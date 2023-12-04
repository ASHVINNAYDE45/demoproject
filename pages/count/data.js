import React,{useState}from "react";
import { Button } from "react-bootstrap";
function MyCount(){
  const[counter,setCounter]= useState(0);
  const[show,setShow]=useState(true);

  function increaseCounterValue(){
   setCounter(counter+1)
  }
   function isEvenOrOdd(){
    if (counter % 2 == 0){
        return"Even";
    }
    return"Odd";
   }
    function handleHideAndShow(){
        setShow(!show);
    }
  return(
    <center>
        <h1>
        <p>Counter value:{counter}</p>
        
        </h1>
        {show&&
        <p>
            Is Even? {isEvenOrOdd()}</p>
}
        <p>
            <Button onClick={increaseCounterValue}>Click me+</Button>
            <button onClick={handleHideAndShow}>{show?"Hide":"Show"}</button>{' '}
        </p>
    </center>
  );

}
export default MyCount;