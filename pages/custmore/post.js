import { Margarine } from "next/font/google";
import React from "react";
import Dispaly from "./display";
function Post(props){
    return(
        <div style={{MargarineTop: '50px'}}>
            <p> Post</p>
     
        <Dispaly text="this is the first page"/>
        </div>
        
    );
}
export default Post;