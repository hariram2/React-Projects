import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { Redirect } from "react-router-dom";


export default function Login(history) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");

    //     if (userInfo){
    //         history.push("/mynotes")
    //     }
    // }, [history]);

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email, password);
        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }
            setLoading(true)
            const { data } = await axios.post("http://localhost:3001/api/users/login", 
            {
                email,
                password,
            },
            config
        );
            console.log(data);
            // alert('Login Success..!')
            window.location = 'http://localhost:3000/admin';
            localStorage.setItem('userInfo',JSON.stringify(data));
            // if(!data) {
            //     return console.log("no data")
            // }else {
            //     return <Redirect to="/Dashboard" />
            // }
            setLoading(false)
        }catch (error){
            console.log(error);
            // setError(error.response.data.message);
            setLoading(false)
        }
    };
    // function onFinish(values){
    //     console.log(values)
    // }
  return (
    <div className='login'>
        {loading && <Loading />}
        <section className="uc__log">
            <div className="container login__card" id="uc_container">
                <div className="form-container sign-in-container">
                    <div className="loginContainer">
                    <h3>Sign in</h3>
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        
                        <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
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

                        <Button variant="primary" type="submit" className="uc__l_btn">
                            Submit
                        </Button>
                        </Form>
                        <Row className="py-3" style={{marginTop:"6px"}}>
                        <Col className="uc__switch">
                            New Customer ? <Link to="/register" className="uc_r3">Register Here</Link>
                        </Col>
                        </Row>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h2> Used Cars Portal</h2>
                            <p>Enter Admin details to access the Dashboard</p>
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

    </div>
  )
}
