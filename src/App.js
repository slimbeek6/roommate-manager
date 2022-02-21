import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
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
import AuthService from "./services/auth.service";
import "./App.css";

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
      <BrowserRouter>
        <HomeProvider>
        <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route exact path = {"/"} element={<PublicLanding/>} />
            <Route exact path = {"/register"} element={<Register/>} />
            <Route exact path = {"/login"} element={<Login />} />

              {/* Logged In Routes, when logged in, allow access to private routes, when not, automatically redirect to the Public Landing*/}
            {currentHome ? (
              <>
                <Route exact path="/landing" element={PrivateLanding} />
                <Route exact path="/budget" component={Budget} />
                <Route exact path="/chores" component={Chores} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/expenses" component={Expenses} />
                <Route exact path="/user" component={UserDashboard} />
              </>
            ) : (
              <Route default="/" component={PublicLanding} />
            )} 
              
          </Routes>
        </HomeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
