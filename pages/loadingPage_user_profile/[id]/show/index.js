import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    console.log("===router.query===", router.query.id);
    if (!!router.query.id) {
      loadData();
    }
  }, [router.query.id]);
  console.log("loadData")

  const loadData = () => {
    axios
      .get(`https://reqres.in/api/users/${router.query.id}`)
      .then(function (response) {
        // handle success
        const { data } = response.data;

        setUserData(data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  console.log("===userData===", userData);
  return (
    <div>
      <p>id: {userData.id}</p>
      <p>email: {userData.email}</p>
      <p>
        Name: {userData.first_name} {userData.last_name}
      </p>
      
    </div>
  );
}

export default UserProfile;
