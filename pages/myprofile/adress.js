import React from "react";
import Button from 'react-bootstrap/Button';
export default function Adress(props){
    let Ad=props.ad
    return(
        <div>
            <div>{Ad}</div>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
        </div>
    )

}