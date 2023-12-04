import React, { useState } from "react";
import Profile from "./profile";
import Post from "./post";
import FontSize from "./fontSize";
import { FontSizeContext } from "./fontSizeContext";

function Customers(){
    const[fontSize,setFontSize]=useState();
    return(
        <div>
        <center>
              <FontSize handleFontSize={setFontSize}/> 
              <FontSizeContext.Provider value={fontSize}>  
                <Profile/>
                <Post/>
              </FontSizeContext.Provider>
        </center>
        </div>
        
    );
}
export default Customers;