import React from 'react';
import { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

export default function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [pic, postDetails] = useState(
    //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    // );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert("Passwords do not match");
          } else 
          try{
            const config = {
                headers: {
                    "Content-type":"application/json"
                },
            };
            const { data } = await axios.post("http://localhost:3001/api/users",
                {
                    name, email, password
                },
                config
            );
            localStorage.setItem("userInfo", JSON.stringify(data));
            window.location = 'http://localhost:3000/login';

          }catch (error){
            setError(error.response.data.message);
          }
        };
    // function onFinish(values){
    //     console.log(values)
    // }
  return (
    <div className='login'>
        <section className="uc__log_reg">
            <div className="container login__card" id="uc_container">
                <div className="form-container sign-in-container">
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type="password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        {/* {picMessage && (
                            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
                        )} */}
                        {/* <Form.Group controlId="pic">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.File
                            onChange={(e) => postDetails(e.target.files[0])}
                            id="custom-file"
                            type="image/png"
                            label="Upload Profile Picture"
                            custom
                            />
                        </Form.Group> */}

                        <Button variant="primary" type="submit" className="uc__l_btn1">
                            Register
                        </Button>
                        </Form>
                        <Row className="py-3 uc__rdir">
                            <Col>
                                Have an Account ? <Link to="/login" className="uc-98">Login</Link>
                            </Col>
                        </Row>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h2> Used Cars Portal</h2>
                            <p>Registration Page</p>
                            <section className="uc__area_ani">
                                <div className="area" >
                                    <ul className="circles">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div >
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        {/* <Row gutter={16}>
            
            <Col lg={8} className='uc__login_form' style={{paddingLeft:"50px"}}>
                <Form layout='vertical'>
                    <h2>Login</h2>
                    <Form.Item name='username' className='uc__form' label='username' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='password' label='password' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <button className='btn1'>Login</button>
                </Form>
            </Col>
        </Row> */}

    </div>
  )
}
