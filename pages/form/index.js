import {useState} from "react";
//import Spinner from 'react-bootstrap/Spinner';

export default function Multiple(){
    const[formData,setFormdata]=useState({name:"",email:"",message:""});
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setFormdata((prevFromData)=>({...prevFromData,[name]:value}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
        console.log(formData)

    };
      console.log("===formData===",formData)
    return(
        
        <from onSubmit={handleSubmit}>
        <center>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </center>

        <center>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </center>

        <center>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
        </center>

        <center>
        <button type="submit">Submit</button>
        </center>
         
        </from>

    );
}
