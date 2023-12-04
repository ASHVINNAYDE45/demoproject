import React, { useState } from "react";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


const initialFormValues = {};
function UserForm() {
  const [formData, setFormData] = useState(initialFormValues);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Container>
      <Row>
        <Col>User Entry:{formData.name}
       
        </Col>
        <Col>
          <Card className=" ">
            <Card.Body>User Details</Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalText"
              >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>



              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalNumber"
              >
                <Form.Label column sm={2}>
                  MobileNo
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type=" mobile number"
                    placeholder="Enter your number"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              


            </Form>
            <Button onClick={handleSubmit}> Save</Button>{" "}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default UserForm;
