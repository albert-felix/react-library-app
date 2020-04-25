import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

const signUp = () => {
  return (
    <Fragment>
      <br/>
      <div className="container" align="center">
        <Form>
          <Form.Group align="left" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group align="left" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group align="left" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group align="left" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            SignUp
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default signUp;
