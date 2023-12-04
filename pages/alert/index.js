import { useState } from "react";
export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <center>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber(number + 2);
          }}>







            s
          increament
        </button>
      </center>
    </>
  );
}
