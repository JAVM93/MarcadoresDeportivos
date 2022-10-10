import React from "react";

import ReactDom from "react-dom/client";
import "./css/bootstrap.min.css";
import "./css/evento.css";
import "./css/login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Mensaje, Registrados } from "./Mensaje";
import Header, { Menu } from "./elements/Header";
import Footer, { Foot } from "./elements/Footer";
import { Tablero } from "./dashboard/Tablero";
import { Equipo } from "./Equipo";
import { ListaEventos } from "./events/ListaEventos";
import { Login } from "./users/Login";
import { PgInicio } from "./dashboard/PgInicio";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Menu />
              <Routes>
                <Route path="/" exact element={<PgInicio />} />
                <Route path="/eventos" exact element={<ListaEventos />} />
                <Route path="/equipos" exact element={<Equipo />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/mensaje" exact element={<Mensaje />} />
              </Routes>
    </Router>
    <Foot />
  </>
);
