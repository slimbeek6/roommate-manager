import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const Login = function() {
    const checkBtn = useRef();
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState("");
    let navigate = useNavigate();

    const runLogin = async (input) => {
        input.preventDefault();
        const formData = Object.fromEntries(new FormData(input.target));
        


        setMessage("");
        setLoading(true);

        // If a successful login, send the user to the home dashboard, if failure, present the failure message
        AuthService.login(formData.username, formData.password)
        .then(() => {
            navigate("/landing");
        }, (error) => {
            const errMessage = (error.response && error.data && error.data.message) || error.message || error.toString();

            setLoading(false);
            setMessage(errMessage);
        });
    };

    // Return the Login page HTML with front end js links
    return (
        <div className="col-md-12">
            <div className="card card-container mx-auto my-5">
                <img className="profile-img-card" src="/assets/img/Login/loginICON-96.png" alt="Login Profile" />
                    
                <Form onSubmit={runLogin} >
                    <div className="form-group">
                        <label htmlFor="username">Address or Home Nickname</label>
                        <Input className="form-control"
                            type="text"
                            name="username"
                            defaultValue="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input className="form-control"
                            type="text"
                            name="password"
                            defaultValue="password"
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">{message}</div>
                        </div>
                    )}
                    <CheckButton style={{display: 'none'}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    )
};

export default Login;