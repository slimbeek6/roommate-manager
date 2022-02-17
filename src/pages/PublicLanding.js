import React from "react";


const PublicLanding = () => {
    // Establish the state and user services

    // Return the public landing page
    return (
        <div className="container">
            <header className="row d-flex">
                <img className="img-fluid col-12 mx-auto my-5 hero"src="/assets/img/Brand/UnderOneRoof.png" />
                <h2 className="col-12 large text-center purple">Welcome to</h2>
                <h1 className="col-12 xlarge text-center blue logo display-3"><span className="blue">Under</span><span className="yellow">One</span><span className="red">Roof</span></h1>
            </header>
        </div>
    );
};

export default PublicLanding;