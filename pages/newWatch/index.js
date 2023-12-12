import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function StopWatch() {
  const [stopwatchState, setStopwatchState] = useState("stopped");
  const [sec, setSec] = useState(0);
  const [timerString, setTimerString] = useState("");
  const [flaggedTimes, setFlaggedTimes] = useState([]);

  useEffect(() => {
    let timer = null;
    if (stopwatchState === "running") {
      timer = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
      }, 10);
    } else if (stopwatchState === "stopped") {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [stopwatchState]);

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
    setStopwatchState((prevState) =>
      prevState === "running" ? "stopped" : "running"
    );
  };

  const handleStop = () => {
    setStopwatchState("stopped");
  };

  const handleReset = () => {
    setSec(0);
    setStopwatchState("stopped");
    setFlaggedTimes([]);
  };

  const handleFlag = () => {
    setFlaggedTimes((prevTimes) => [...prevTimes, timerString]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{
              marginTop: "40px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2> </h2>
            <ul>
              {flaggedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
        </Col>

        <Col
          style={{
            marginTop: "40px",
            border: "2px solid #BF833F",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <span style={{ fontSize: "30px" }} className="digit" id="mil">
              {timerString}
            </span>
          </div>
          <div>
            {stopwatchState === "running" ? (
              <Button variant="danger" onClick={handleStop}>
                ⚪
              </Button>
            ) : (
              <Button variant="success" onClick={handleStart}>
                ⏩
              </Button>
            )}{" "}
            <Button variant="info" onClick={handleReset}>
            ⭐
            </Button>{" "}
            <Button variant="primary" onClick={handleFlag}>
            🏁
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StopWatch;
