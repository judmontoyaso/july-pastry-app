import React from "react";
import logo from "./img/logo.png";
import left from "./img/left.png";
import house from "./img/house.png";
import caja from "./img/caja.png";
import ventas from "./img/ventas.png";
import salir from "./img/salir.png";
import grupo from "./img/grupo.png";
import clientes from "./img/clientes.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { useUsuario } from "../context/usuarioContext";

const Sidebar = () => {
  const { user, logout } = useAuth0();
  const cerrarSesion = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem("token", null);
  };

  const { usuarioData } = useUsuario();

  return (
    <nav className="hidden md:flex md:w-72 border border-gray-300 h-full flex-col justify-between bg-gray-200 p-0 sidebar">
      <div id="sidebar">
        <ul>
          <Link to="/panel">
            <li>
              <img src={logo} alt="Logo Julis" className="logo" />
            </li>
          </Link>

          <li className="active">
            <img
              style={{ float: "left" }}
              src={usuarioData.picture}
              className="ml-4 h-8 w-8 rounded-full"
            />
            {usuarioData.given_name}
          </li>
          <Link to="/panel">
            <li className="active">
              <img
                style={{ float: "left" }}
                src={house}
                alt="Logo Julis"
                className="icono"
              />
              Dashboard
            </li>
          </Link>
          <Link to="/productos">
            <li className="active">
              <img
                style={{ float: "left" }}
                src={caja}
                alt="Logo Julis"
                className="icono"
              />{" "}
              Productos
            </li>
          </Link>
          <Link to="/tablaventas">
            <li className="active">
              <img
                style={{ float: "left" }}
                src={ventas}
                alt="Logo Julis"
                className="icono"
              />
              <a href="/registro-venta.html">Ventas</a>
            </li>
          </Link>
          <Link to="/usuarios">
            <li className="active">
              <img
                style={{ float: "left" }}
                src={grupo}
                alt="Logo Julis"
                className="icono"
              />
              Usuarios
            </li>
          </Link>
        </ul>
        <br />
        <br />
        <br />
        <ul>
          <li className="Salir">
            <button onClick={() => cerrarSesion()}>
              <img
                style={{ float: "left" }}
                src={salir}
                alt=""
                className="icono"
              />{" "}
              Cerrar Sesión
            </button>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <script src="main"></script>
      </div>
    </nav>
  );
};
export default Sidebar;
