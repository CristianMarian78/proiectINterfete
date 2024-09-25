import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Formular from "./formular";
import Program from "./program";
import Despre from "./despre";
import Lipsa from "./lipsa";
import "./app.css";
import { Routes, Route, NavLink } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergActiv = (id) => {
    const listaNoua = lista.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setLista([...listaNoua]);
  };

  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" },
  };

  const adaugaActiv = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="sm" className="p-2">
        <Navbar.Brand href="/">Angajati activi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Lista
            </NavLink>
            <NavLink
              to="/formular"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Adauga angajat
            </NavLink>
            <NavLink
              to="/despre"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Despre
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={<Program activitati={lista} sterge={stergActiv} />}
        />
        <Route path="/formular" element={<Formular transmit={adaugaActiv} />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}
