import React from "react";
import { FontSizeContext } from "./fontSizeContext";

function Dispaly(props){
    const{text}=props;
    const fontSize = useContext(FontSizeContext);
    



    return(
        <div style={{fontSize: (fontSize || 14) + 'px'}}>
            {text}
        </div>
        
    );
}
export default Dispaly;