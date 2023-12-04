import React from "react";
import styles from "./user.module.css"
import Success from "./success";
import Alert from "./alert";
import Fail from "./fail";
export default function Button(){
    return(
        <>
        <button className={styles.bgBlue}>click me</button>
        <br/>
        <Success/>
        <Alert/>
        <Fail/>
        </>
    )
}
    