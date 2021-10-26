import React from "react";

import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import eliminar from "../../media/eliminar.png";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useState } from "react";
import { useEffect } from "react";
import { obtenerProductos } from "../../utils/api";
import { obtenerUsuarios } from "../../utils/api";

const RegistrarVenta = () => {
  const { userData } = useUser();
  const [venta, setVenta] = useState(userData);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ejecutarConsultaProductos, setEjecutarConsultaProductos] =
    useState(true);
  const [ejecutarConsultaUsuarios, setEjecutarConsultaUsuarios] =
    useState(true);

  console.log("en modificar", venta);

  useEffect(() => {
    console.log("consulta", ejecutarConsultaProductos);
    if (ejecutarConsultaProductos) {
      obtenerProductos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductos(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsultaProductos(false);
    }
  }, [ejecutarConsultaProductos]);

  useEffect(() => {
    console.log("consulta", ejecutarConsultaUsuarios);
    if (ejecutarConsultaUsuarios) {
      obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuarios(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsultaUsuarios(false);
    }
  }, [ejecutarConsultaUsuarios]);

  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Modificar Ventas" />
      </section>

      <form>
        <div className="field large">
          <label for="">Id Cliente:</label>
          <input
            className="inputForm"
            type="number"
            placeholder="Ingrese el id del cliente"
            required
            value={venta.idCliente}
            disabled
          />
        </div>
        <div className="field">
          <label for="">Producto:</label>
          <select
            className="inputForm"
            type="text"
            required
            value="torta de chocolate"
          >
            {productos.map((el) => {
              return <option value={el._id}>{el.nombreProducto}</option>;
            })}
          </select>
        </div>
        <div className="field large">
          <label for="vendedor">ID Vendedor:</label>
          <select
            className="inputForm"
            name="vendedor"
            type="text"
            required
            value={venta.vendedor}
          >
            {" "}
            {usuarios.map((el) => {
              return <option value={el._id}>{el.idUsuario}</option>;
            })}
          </select>
        </div>

        <div className="field">
          <input className="boton" type="submit" value="Agregar Producto" />
        </div>

        <section>
          <label className="labelForm" htmlFor="estadoUsuario">
            Estado de venta:
          </label>
          <select
            className="selectForm"
            id="estadoUsuario"
            value={venta.estado}
          >
            <option>En proceso</option>
            <option>finalizada</option>
            <option>Despachada</option>
          </select>
        </section>

        <div className="field boton fecha">
          <label className="fecha" for="">
            Fecha de venta
          </label>
          <input
            className="fecha"
            type="date"
            required
            defaultValue={venta.fecha}
          />

          <button>
            <a class="add" href="">
              {" "}
              Guardar
            </a>
          </button>
        </div>

        <table class="ventas">
          <thead>
            <tr>
              <th>ID Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {venta.productos.map((producto) => (
              <tr>
                <td>{producto._id}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precioUnidad}</td>
                <td>
                  <span>
                    <img class="icono" src={edit} alt="Editar" />
                    <img class="icono" src={eliminar} alt="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default RegistrarVenta;
