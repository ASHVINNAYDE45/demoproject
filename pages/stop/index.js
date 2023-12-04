import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function StopWatch() {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [sec, setSec] = useState(0);
  const [timerString, setTimerString] = useState("");
  const [flaggedTimes, setFlaggedTimes] = useState([]);

  useEffect(() => {
    let timer = null;
    if (start && !stop) {
      timer = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
      }, 10);
    } else if (stop) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start, stop]);

  useEffect(() => {
    const minutes = Math.floor((sec % 360000) / 6000);
    const seconds = Math.floor((sec % 6000) / 100);
    const milliseconds = sec % 100;

    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;

    setTimerString(formattedTime);
  }, [sec]);

  const handleStart = () => {
    setStop(false);
    setStart(true);
  };

  const handleStop = () => {
    setStart((prevStart) => !prevStart);
    setStop((prevstop) => !prevstop);
  };

  const handleReset = () => {
    setSec(0);
    setStart(false);
    setStop(false);
    setFlaggedTimes([]);
  };

  const handleFlag = () => {
    setFlaggedTimes((prevTimes) => [...prevTimes, timerString]);
  };

  return (
    <Container style={{ marginTop: "120px" }}>
      <Row>
        <Col>
          <div>
            <h2>Flagged Times:</h2>
            <ul>
              {flaggedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
        </Col>
        <Col style={{ marginTop: "150px" }}>
          <center>
            <div>
              <span style={{ fontSize: "50px" }} className="digit" id="mil">
                {timerString}
              </span>
            </div>
            <div>
              <Button variant="dark" onClick={handleFlag}>
                Flag
              </Button>{" "}
              <Button variant="secondary" type="submit" onClick={handleStop}>
                Stop
              </Button>{" "}
              <Button variant="danger" type="submit" onClick={handleReset}>
                Reset
              </Button>{" "}
              <Button variant="success" type="submit" onClick={handleStart}>
                Start
              </Button>{" "}
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default StopWatch;
