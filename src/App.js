import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicLanding from "./pages/PublicLanding";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path = {"/"} component={PublicLanding} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
