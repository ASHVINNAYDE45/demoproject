import React, { useEffect, useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import axios from "axios";

function ApiCalling() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    fetchData(currentPage);
    const handleScroll = () => {
      console.log("Scroll");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  const fetchData = (page) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDisplay = () => {
    fetchData(currentPage);
    console.log("status", currentPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <center>
        <Button onClick={handleDisplay}>Display</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>

        <h1>{isOnline ? "Online" : "Offline"}</h1>
        {isOnline ? (
          <p>You are currently online and can view content.</p>
        ) : (
          <p>
            You are currently offline. Please check your internet connection.
          </p>
        )}
      </center>
    </>
  );
}

export default ApiCalling;
