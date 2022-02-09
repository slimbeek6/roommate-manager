import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    // Insert functionality to have logged in home
    const currentUser = false;

    // Create logout function
    const logOut = function() {

    };

    //Return the html of the navbar
    return (
        <nav className="navbar navbar-expand-lg navbar-dark blueBG">
            <div className="container-fluid">

                {/* Check if user is logged in, if not, redirect to the home page, otherwise to the dashboard */}
                {currentUser ? (
                    <Link to={'/landing'} className="navbar-brand logo">
                        <img src = "/assets/img-sans-background/v1-heart/UORHeartOnlyLOGO72.png" alt="Under One Roof Logo and Home Button" />
                    </Link>
                ) : (
                    <Link to={'/'} className="navbar-brand logo">
                        <img src = "/assets/img-sans-background/v1-heart/UORHeartOnlyLOGO72.png" alt="Under One Roof Logo and Home Button" />
                    </Link>
                )}

                {/* Navbar toggle */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navbar">
                    <span className="navbar-toggler-icon" />
                </button>

                
                {/* If User is not logged in, create links to the Register and Login pages, otherwise links to Logout and Private Landing */}                   
                <div className="navbar-nav ml-auto">
                    {currentUser ? (
                        // Logged in
                        <div>
                            <li className="nav-item active">
                                <Link to={'/PrivateLanding'} className="nav-link">
                                    <img src="/assets/img/Profile/profileICON-48.png" alt="Profile Button"></img>
                                    Profile
                                </Link>
                            </li>

                            <li className="nav-item active">
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    <img src="/assets/img/LoginOut-with-House/LoginOutICON-48.png" alt="Logout Button" />
                                    Logout
                                </a>
                            </li>
                        </div>
                    ) : (
                        // Not Logged in

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link to={'/Login'} className="nav-link">
                                    <img src="/assets/img/LoginOut-with-House/LoginOutICON-48.png" alt="Login Button"></img>
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item active">
                                <Link to={'/Register'} className="nav-link">
                                    <img src="/assets/img/LoginOut-with-House/register-with-houseICON-48.png" alt="Register Button"></img>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}   
                </div>

            </div>
        </nav>
    );
}

//Export the component
export default Navbar;