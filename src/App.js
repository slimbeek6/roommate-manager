import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicLanding from "./pages/PublicLanding";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { HomeProvider } from "./utils/LoginState"
import authService from "./services/auth.service";
import "./App.css";

function App() {
  // Establish current Home state variable to manage login status
  const [currentHome, setCurrentHome] = useState(undefined);

  useEffect(() => {
    const loggedInHome = authService.getCurrentHome();

    if (loggedInHome) {
      setCurrentHome(loggedInHome);
    }

    console.log(loggedInHome);
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

          </Routes>
        </HomeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
