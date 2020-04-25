import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return(
    <Fragment>
        <br/>
      <div className="container" align="center">
        <Form>
          <Form.Group align="left" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group align="left" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            Login
          </Button>

        </Form>
      </div>
    </Fragment>
  )
};

export default Login;