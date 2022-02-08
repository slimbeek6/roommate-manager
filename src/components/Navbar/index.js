import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    // Insert functionality to have logged in home
    const currentUser = false;

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

                
            </div>
        </nav>
    );
}

//Export the component
export default Navbar;