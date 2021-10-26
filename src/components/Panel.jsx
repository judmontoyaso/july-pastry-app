import React from "react";
import ContenedorTitulos from "../components/ContenedorTitulos";
import house from "./img/house.png";
import { useState, useEffect } from "react";

import ventas from "./img/ventas.png";

import grupo from "./img/grupo.png";
import clientes from "./img/clientes.png";
import { Link } from "react-router-dom";
import { obtenerUsuarios, obtenerVentas } from "../utils/api";

const Panel = () => {
  const [ventasConsulta, setVentasConsulta] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [usuariosConsulta, setUsuariosConsulta] = useState([]);
  const [totalVentas, setTotalVentas] = useState(0);

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setVentasConsulta(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuariosConsulta(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    let valorTotal = 0;
    Object.values(ventasConsulta).forEach((f) => {
      valorTotal = valorTotal + parseFloat(f.valorTotal);
    });
    setTotalVentas(valorTotal);
  }, [ventasConsulta]);

  console.log(ventasConsulta);

  return (
    <div className="ml-48">
      <section>
        <ContenedorTitulos Titulo="Panel de control" />
      </section>

      <section className="flex  mt-6 mb-6">
        <div class="dash-cards">
          <div class="card-single">
            <Link to="/tablaventas">
              <div class="card-body">
                <span>
                  <img src={ventas} alt="" />
                </span>
                <div>
                  <h5>{ventasConsulta.length}</h5>
                  <h4>Ventas</h4>
                </div>
              </div>
            </Link>
          </div>

          <div class="card-single">
            <Link to="/usuarios">
              <div class="card-body">
                <span>
                  <img src={clientes} alt="" />
                </span>
                <div>
                  <h5>{usuariosConsulta.length}</h5>
                  <h4>Usuarios</h4>
                </div>
              </div>
            </Link>
          </div>

          <div class="card-single">
            <div class="card-body">
              <span>
                <img src={house} alt="" />
              </span>
              <div>
                <h5>{totalVentas}</h5>
                <h4>Ingresos</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="resumen">
        <div class="activity-grid">
          <div class="activity-card">
            <h3 className="font-bold">Últimas Ventas</h3>

            <div class="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>ID Venta</th>
                    <th>ID Vendedor</th>
                    <th>ID cliente</th>
                    <th>Valor Total</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {ventasConsulta.slice(-3).map((venta) => (
                    <tr key={venta._id}>
                      <td>{venta._id}</td>
                      <td>{venta.vendedor.name}</td>
                      <td>{venta.idCliente}</td>
                      <td>{venta.valorTotal}</td>
                      <td>{venta.fecha}</td>
                      <td>{venta.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panel;
