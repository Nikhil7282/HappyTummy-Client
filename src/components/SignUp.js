import React, { useState } from "react";
import axios from "axios"
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { url } from "../App";

function SignUp() {
const [role,setRole]=useState("Select an Option")
const status=(role)=>{
    return role==="Admin"?true:false
  }
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber:"",
    adminRole: status(role)
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`${url}`)
    console.log(userDetails);
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Register here..
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          <h4>Username</h4>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              username: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          <h4>Email address</h4>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              email: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>
                          <h4>Password</h4>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              password: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicNumber"
                      >
                        <Form.Label>
                          <h4>Contact Number</h4>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Contact Number"
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              contactNumber: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={userDetails.role}
                          variant="warning"
                        >
                          <Dropdown.Item
                            onClick={(e) => {
                                setRole("Admin")
                            }}
                          >
                            Admin
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                                setRole("User")
                            }}
                          >
                            User
                          </Dropdown.Item>
                        </DropdownButton>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="warning"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <a href="{''}" className="text-warning fw-bold">
                          Sign In
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

export default SignUp;
