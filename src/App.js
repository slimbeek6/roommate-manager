import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicLanding from "./pages/PublicLanding";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { HomeProvider } from "./utils/LoginState"
import PrivateLanding from "./pages/PrivateLanding";


function App() {
  const [currentHome, setCurrentHome] = useState(undefined);

  useEffect(() => {
    const loggedInHome = AuthService.getCurrentHome();

    if (loggedInHome) {
      setCurrentHome(loggedInHome);
    }
  }, []);


  return (
    <div className="App">
      <Router>
        <HomeProvider>
        <Navbar />
          <Switch>
            {/* Public Routes */}
            <Route exact path = {"/"} component={PublicLanding} />
            <Route exact path = {"/Register"} component={Register} />
            <Route exact path = {"/Login"} component={Login} />

              {/* Logged In Routes */}
            {loggedInHome.loggedIn ? (
              <Route exact path="/landing" component={PrivateLanding} />
            ) : (
              <Route default="/" component={PublicLanding} />
            )} 
              
          </Switch>
        </HomeProvider>
      </Router>
    </div>
  );
}

export default App;
