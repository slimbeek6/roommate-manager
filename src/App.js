import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicLanding from "./pages/PublicLanding";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { HomeProvider } from "./utils/LoginState"
import PrivateLanding from "./pages/PrivateLanding";
import Budget from "./pages/Budget";
import Chores from "./pages/Chores";
import Expenses from "./pages/Expenses";
import Calendar from "./pages/Calendar";
import UserDashboard from "./pages/UserDashboard";


function App() {
  // Establish current Home state variable to manage login status
  const [currentHome, setCurrentHome] = useState(undefined);

  useEffect(() => {
    const loggedInHome = AuthService.getCurrentHome();

    if (loggedInHome) {
      setCurrentHome(loggedInHome);
    }
  }, []);

  // Return the Router, Switch, Providers and Routes
  return (
    <div className="App">
      <Router>
        <HomeProvider>
        <Navbar />
          <Switch>
            {/* Public Routes */}
            <Route exact path = {"/"} component={PublicLanding} />
            <Route exact path = {"/register"} component={Register} />
            <Route exact path = {"/login"} component={Login} />

              {/* Logged In Routes, when logged in, allow access to private routes, when not, automatically redirect to the Public Landing*/}
            {loggedInHome.loggedIn ? (
              <div>
                <Route exact path="/landing" component={PrivateLanding} />
                <Route exact path="/budget" component={Budget} />
                <Route exact path="/chores" component={Chores} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/expenses" component={Expenses} />
                <Route exact path="/user" component={UserDashboard} />
              </div>
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
