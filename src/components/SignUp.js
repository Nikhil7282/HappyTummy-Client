import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
// const [role,setRole]=useState("Select an Option")
  const navigate=useNavigate()

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber:"",
    adminRole:false
  });

  const handleSelect=(eventKey)=>{
    if(eventKey==="true"){
      setUserDetails({...userDetails,adminRole:true})
    }
    else{
      setUserDetails({...userDetails,adminRole:false})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${url}/users/signup`,userDetails)
    .then((res)=>{
      console.log(res.data)
      navigate('/login')
    })
    .catch((error)=>{
      console.log(error);
    })
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
                          <h5>Username</h5>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              name: e.target.value,
                            });
                          }}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          <h5>Email address</h5>
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
                          <h5>Password</h5>
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
                          <h5>Contact Number</h5>
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
                          title="Select"
                          onSelect={handleSelect}
                          variant="warning"
                        >
                          <Dropdown.Item
                          eventKey="true"
                            // onClick={(e) => {
                            //     setRole("Admin")
                            // }}
                          >
                            Admin
                          </Dropdown.Item>
                          <Dropdown.Item
                          eventKey="false"
                          >
                            User
                          </Dropdown.Item>
                        </DropdownButton>
                        <p>Access Role:{" "}{userDetails.adminRole?"Admin":"User"}</p>
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
