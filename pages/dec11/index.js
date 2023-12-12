import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("==count==", count);
  }, [count]);

  useEffect(() => {
    console.log("==num==",num);
    setNum(num);
  }, [num]);

  const handleIncrement = () => {
    let nextcount=count+1
    setCount(nextcount);
    setSum(sum+nextcount);
  };
  const handleNumber = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    function handleScroll(e) {
      console.log("=====scrolling====");
      console.log(window.scrollX, window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // return () => console.log("====unmounting===================");
  }, []);
  // const handleDecrement=()=>{
  // setCount(count-1);

  // };
  return (
    <center>
      <div>
        <div> Count:{count}</div>
        <div>Sum:{sum}</div>
        <div>Num:{num}</div>
        <button onClick={handleIncrement}>Click</button>
        <button onClick={handleNumber}>Number</button>
      </div>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </center>
  );
}

export default Counter;
