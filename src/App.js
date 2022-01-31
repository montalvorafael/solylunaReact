import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Componentes
import Home from "./pages/home";
import Servicios from "./pages/servicios";
import Noticias from "./pages/noticias";
import Habitaciones from "./pages/habitacione";
import Contactenos from "./pages/contactenos";
import Equipo from "./pages/equipo";
import Login from "./pages/login"
import Usuario from "./pages/usuario"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/noticias" render={(props) => <Noticias {...props} />} />
        <Route exact path="/servicios" render={(props) => <Servicios {...props} />} />
        <Route exact path="/habitaciones" render={(props) => <Habitaciones {...props} />} />
        <Route exact path="/contactenos" render={(props) => <Contactenos {...props} />} />
        <Route exact path="/equipo" render={(props) => <Equipo {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/dashboard" render={(props) => <Usuario {...props} />} />


      </Switch>
    </Router>
  );
}

export default App;