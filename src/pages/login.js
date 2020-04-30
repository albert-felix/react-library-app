import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import loginRequest from "../services/loginRequest";
import routes from "../routes/routes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onEmailChange = event => setEmail(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);

  const loginSubmit = async event => {
    event.preventDefault();

    try {
      const url = "https://upo24.sse.codesandbox.io/user/login";
      const loginData = { email, password };
      const response = await loginRequest(url, "POST", loginData);
      console.log(response)
      if (response.status === "SUCCESS") {
        window.localStorage.setItem("jwtToken", response.jwtToken);
        alert("Successfully Logged In");
        history.push(routes.home);
      } else {
        alert("Invalid User");
      }
    } catch (e) {
      console.error(e);
      alert("Something Went Wrong");
    }
  };

  return (
    <Fragment>
      <br />
      <div className="container" align="center">
        <Form>
          <Form.Group align="left" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group align="left" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={onPasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button onClick={loginSubmit} variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Login;
