import React from "react";

import UserInfo from "./userinfo";
import student from  "./student"
export default function User(){
    return (student.student.map((studentData => {
        return <UserInfo sData={studentData}/>
    }))
    
  )
};