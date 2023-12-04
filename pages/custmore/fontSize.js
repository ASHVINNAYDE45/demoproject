import React ,{useState}from "react";
import Dispaly from "./display";

function FontSize(props){
    const [inputValue, setInputValue] = useState('');

    const {handleFontSize} = props

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = () => {
        handleFontSize(inputValue);
        console.log("=== inputValue===")
    }
    return(
        <div style={{marginTop: '50px'}}>
        <input name="fontSize" placeholder="Enter the font size" onChange={handleChange} />
        <button type= "button" onClick={handleSubmit}> click me</button>
        </div>
    );
}
export default FontSize;