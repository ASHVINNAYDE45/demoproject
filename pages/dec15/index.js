import axios from "axios";
import React, { useState } from "react";

import { Col, Image, Pagination, Table } from "react-bootstrap";
import Link from "next/link";



function Dec15() {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState({
    totalPages: 0,
    currentPage: 1,
    nextPage: 1,
  });

  const loadData = (page) => {
    setIsLoading(true);

    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then(function (response) {
        const { data, total_pages: totalPages, page } = response.data;

        setUsers([...users, ...response.data.data]);

        setMetaData({
          totalPages: totalPages,
          currentPage: page,
          nextPage: page === totalPages ? null : page + 1,
        });
      });
    
      
     
  };
 
  return (
 
<center>
      <Col className="col-md-6 mt-2">
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, uIndex) => {
              return (
                <tr key={`userId-${user.id}`}>
                  <td>
                    <Link href={`/loadingPage_user_profile/${user.id}/show`}>
                      {user.id}
                    </Link>
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Image src={user.avatar} roundedCircle alt="user" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* <Pagination>
          {map(times(metaData.totalPages), (pn) => {
            let page = pn + 1;
            return (
              <Pagination.Item
                onClick={() => handleNextPage(page)}
                active={page === metaData.currentPage}
                key={`pn-${pn}`}
              >
                {page}
              </Pagination.Item>
            );
          })}
        </Pagination> */}

        {metaData.nextPage !== null && (
        //   <button
        //     onClick={() => loadData(metaData.nextPage)}
        //     disabled={isLoading}
        //   >
        //     {isLoading ? "Loading..." : "Load More Data"}
        //   </button>
          <button
            onClick={() => loadData(metaData.nextPage)}
            disabled={isloading}
          >
            {isloading ? "Loading..." : "Load More Data"}
          </button>
        )}
      </Col>
    </center>

  );
}
export default Dec15;
