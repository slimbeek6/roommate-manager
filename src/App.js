import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicLanding from "./pages/PublicLanding";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            {/* Public Routes */}
            <Route exact path = {"/"} component={PublicLanding} />
            <Route exact path = {"/Register"} component={Register} />
            <Route exact path = {"/Login"} component={Login} />

              {/* Logged In Routes */}
              
          </Switch>
      </Router>
    </div>
  );
}

export default App;
