import React, { useEffect, useState } from "react";
import { Table, Col } from "react-bootstrap";
import Link from "next/link";

function Data() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []); // Run the effect only on mount

  const loadData = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=2&delay=15")
      .then((response) => {
        setIsLoading(false);
        console.log("=====res==", response);
        if (!response.ok) {
          console.log("====error=========================");
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((resData) => {
        console.log("====success=========================", resData);
        setUsers(resData.data); // Assuming the response has a 'data' property containing the user array
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  };

  return (
    <center>
      <Col className="col-md-6 mt-2">
        <button onClick={loadData} disabled={loading}>
          {loading ? "Loading..." : "Load Data"}
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={`userId-${user.id}`}>
                <td>
                  <Link href={`/loadingPage_user_profile/${user.id}/show`}>
                    {user.id}
                  </Link>
                </td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </center>
  );
}

export default Data;
