import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../App";

function Login() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setUserDetails({...userDetails,[name]:value})
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(userDetails);
    axios.post(`${url}/users/login`,userDetails)
    .then((res)=>{
      console.log(res.data)
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('userId',res.data.userId)
      localStorage.setItem('username',res.data.username)
      navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div
              className="border border-3 border-warning"
              style={{ backgroundColor: "f75c03" }}
            ></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Happy-Tummy</h2>
                  <p className=" mb-5">
                    Please enter your Username and password!
                  </p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          <h3>Username</h3>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                          name="name"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>
                          <h3>Password</h3>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group> */}
                      <div className="d-grid">
                        <Button
                          type="submit"
                          variant="warning"
                          onClick={handleClick}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/signUp" className="text-warning fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
