import React, { useEffect, useState } from "react";
import Data from "../loadingPage";

import { Card } from "react-bootstrap";

function Dec13() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div><h1>User List</h1>
  <Card>
      <Card.Body>
      <ul>
    {user && user.length > 0 && user.map((userObj, index) => (
        <li key={userObj.id}>{userObj.name}</li>
      ))}
  </ul>
      </Card.Body>
    </Card>
  <ul>
    
  </ul></div>;
}

export default Dec13;
