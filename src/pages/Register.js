// Import key components and forms
import React from "react";
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
    // Establish auth services and state/ref functionality




    // Return the html for the page itself
    return (
        <div className="col-md-12">
            <div className="card card-container mx-auto my-5">
                <img className="profile-img-card" src="/assets/img/addUser/addUserICON-96.png" alt="profile-img" /> 

                <Form onSubmit={} ref={form}>
                    
                </Form>
            </div>
        </div>
    )
};

export default Register;