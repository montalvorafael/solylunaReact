import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Componentes
import Home from "./pages/home";
import Noticias from "./pages/noticias";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />

        <Route exact path="/noticias" render={(props) => <Noticias {...props} />} />

      </Switch>
    </Router>
  );
}

export default App;