// Import key components and forms
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/buttons";
import {isEmail} from "validator";

// Import Login Auth Services


// Create functions to validate the inputs
const validateEmpty = function(input) {
    if(!input) {
        return (
            <div className="alert alert-danger" role="alert">This field is required</div>
        );
    };
};

const validateEmail = function(input) {
    if(!isEmail(input)) {
        return (
            <div className="alert alert-danger" role="alert">Please enter a valid email</div>
        );
    };
};

const validateUsername = function(input) {
    if(input.length < 3 || input.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">Username must be between 3 and 40 characters</div>
        );
    };
};

const validatePassword = function(input) {
    if(input.length < 6) {
        return (
            <div className="alert alert-danger" role="alert">Password must be at least 6 characters</div>
        );
    };
};


// Create the page for the Registration page, including front end js and html
const Register = function(props) {
    // Reference links to the form and the button
    const form = useRef();
    const checkBtn = useRef();

    // Establish state elements for the Home model
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Establish state elements for front end functionality of button and alerts
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    // Create functions for changing the state element values
    const changeUsername = function (event) {
        setUsername(event.target.value);
    };

    const changeEmail = function (event) {
        setUsername(event.target.value);
    };

    const changePassword = function (event) {
        setPassword(event.target.value);
    };

    // Create function that submits the new home model value to the auth service
    const registerHome = function (event) {
        event.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        // Send the new values to the auth service
        if (checkBtn.current.context._errors.length === 0) {
            
        }
    };



    // Return the html for the page itself
    return (
        <div className="col-md-12">
            <div className="card card-container mx-auto my-5">

                {/* Branding */}
                <img className="profile-img-card" src="/assets/img/addUser/addUserICON-96.png" alt="profile-img" /> 

                {/* Use the react build form for registration information input */}
                <Form onSubmit={} ref={form}>
                    {!successful && (
                        <div>
                            {/* Input for the Home model username */}
                            <div className="form-group">
                                <label htmlFor="username">Address or Home Nickname</label>
                                <Input className="form-control"
                                type="text"
                                name="username"
                                value={username}
                                onChange={changeUsername}
                                validations={[validateEmpty, validateUsername]}
                                />
                            </div>

                            {/* Input for the Home model email */}
                            <div className="form-group">
                                <label htmlFor="email">Master Email for Account</label>
                                <Input className="form-control"
                                type="text"
                                name="email"
                                value={email}
                                onChange={changeEmail}
                                validations={[validateEmpty, validateEmail]}
                                />
                            </div>

                            {/* Input for the Home model password */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input className="form-control"
                                type="text"
                                name="password"
                                value={password}
                                onChange={changePassword}
                                validations={[validateEmpty, validatePassword]}
                                />
                            </div>
                        </div>
                    )}

                    {/* On submit, return a message. If successful, provide a link to the login page. If failure, send error message */}
                    {message && (
                        <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger"} role="alert">{message}</div>
                            <div className="d-flex justify-content-center">
                                <a href="/login">
                                    <img src="/assets/img/Login/loginICON-72.png" alt="Login button image" />
                                </a>
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    )
};

export default Register;