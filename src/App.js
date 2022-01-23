import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Componentes
import Home from "./pages/home";
import Servicios from "./pages/servicios";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />

        <Route exact path="/servicios" render={(props) => <Servicios {...props} />} />

      </Switch>
    </Router>
  );
}

export default App;