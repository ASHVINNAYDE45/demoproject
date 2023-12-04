import React, { useRef, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styles from "./stopWatch.module.css";

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [flagEntries, setFlagEntries] = useState([]);
  const [timestring, setTimeString] = useState("00:00:00");
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000); // Change this to 1000 if you want to update every second
  };
  

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setStartTime(null);
    setNow(null);
    setTimeString("00:00:00");
  };
  const handleFlag = () => {
    if (startTime !== null) {
      const entryTime = Math.floor((now - startTime) / 1000);
      setFlagEntries([...flagEntries, entryTime.toFixed(3)]);
    }
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStopwatch = () => {
    // console.log("=======Click Button=======");
    // Add your logic here if needed
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  useEffect(() => {
    if (startTime !== null && now !== null) {
      const elapsedSeconds = (now - startTime) / 1000;

      
      const minutes = Math.floor((elapsedSeconds % 3600) / 60);
      const seconds = elapsedSeconds % 60;

      setTimeString(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }
  }, [now, startTime]);

  
  return (
    <div className="center-container stopwatch-container" style={{ border: "2px solid #ccc", padding: "180px", marginTop: "15px" }}>
    
      <center>
        <div className="time-display">{timestring}</div>
        </center>
      

      <center>
        <div className="button-container">
          <Button variant="primary" onClick={handleFlag}>
            Flag
          </Button>{" "}
          <Button variant="success" onClick={handleStart}>
            Start
          </Button>{" "}
          <Button variant="warning" onClick={handleReset}>
            Reset
          </Button>{" "}
          <Button variant="danger" onClick={handleStop}>
            Stop
          </Button>{" "}
        </div>
      </center>
      <Container>
        <Row>
          <div className="flag Entries" style={{ border: "2px solid #ccc", padding: "180px", marginTop: "15px" }}>
            <h3> Entries:</h3>
            <ul>
              {flagEntries.map((entry, index) => (
                <li key={index}>{entry} </li>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default StopWatch;
