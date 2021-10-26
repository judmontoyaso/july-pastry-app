import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContenedorTitulos from "../../components/ContenedorTitulos";
import edit from "../../media/edit.png";
import { useState, useEffect } from "react";
import { obtenerVentas, editarVenta } from "../../utils/api";
import { useUser } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import check from "../../media/check.png";
import { obtenerProductos } from "../../utils/api";
import { obtenerUsuarios } from "../../utils/api";
import Swal from "sweetalert2";
import PrivateComponent from "../../components/PrivateComponent";
import Pagination from "../../components/pagination";
import PrivateVenta from "../../components/PrivateVenta";

const TablaVenta = () => {
  const { setUserData } = useUser();
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltradas, setVentasFiltradas] = useState(ventas);
  const form = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [color, setColor] = useState("text-blue-400");

  const [loading, setLoading] = useState(false);

  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });
  };

  useEffect(() => {
    const fetchVentas = async () => {
      setLoading(true);
      await obtenerVentas(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setVentas(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error("Salio un error:", error);
          setLoading(false);
        }
      );
    };
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchVentas();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setVentasFiltradas(
      ventas.reverse().filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, ventas]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ventasFiltradas.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ml-48 mr-20">
      <section>
        <ContenedorTitulos Titulo="Gestión de Ventas" />
      </section>
      <section>
        <section className="flex justify-between mt-6 mb-6">
          <section>
            <PrivateComponent roleList={["Vendedor", "Administrador"]}>
              <section className="  ml-16">
                <Link to="registrarventa">
                  <button className="bg-red-100 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5">
                    Nueva venta
                  </button>
                </Link>
              </section>
            </PrivateComponent>
          </section>
          <section>
            <input
              value={busqueda}
              className=" h-10 mr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              id="idProducto"
              placeholder="Ingrese id o nombre"
              type="ID"
              onChange={(e) => setBusqueda(e.target.value)}
            ></input>

            <button className="bg-red-100 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5">
              Buscar
            </button>
          </section>
        </section>
      </section>

      <section>
        <form ref={form} onSubmit={submitEdit}>
          <table className="tabla mt-2">
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>Nombre Vendedor</th>
                <th>ID cliente</th>
                <th>Nombre Cliente</th>
                <th>Productos</th>
                <th>Valor</th>
                <th>Cantidad</th>
                <th>Valor Total</th>
                <th>Fecha</th>
                <th>Estado</th>
                <PrivateVenta roleList={[true]}>
                  <PrivateComponent roleList={["Vendedor"]}>
                    <th>Editar</th>
                  </PrivateComponent>
                  <PrivateComponent roleList={["Administrador"]}>
                    <th>Editar</th>
                  </PrivateComponent>
                </PrivateVenta>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((venta) => {
                return <FilaVentas venta={venta} key={venta._id} />;
              })}
            </tbody>
          </table>
          <section className="mt-8 ml-16">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={ventas.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </section>
        </form>
      </section>
    </div>
  );
};

const FilaVentas = ({ venta, producto }) => {
  const { setUserData } = useUser();
  const { userData } = useUser();
  const [usuarios, setUsuarios] = useState([]);
  const [productosVenta, setProductosVenta] = useState([]);
  const [ejecutarConsultaProductos, setEjecutarConsultaProductos] =
    useState(true);
  const [ejecutarConsultaUsuarios, setEjecutarConsultaUsuarios] =
    useState(true);

  const [editar, setEditar] = useState(false);

  const [valor, setValor] = useState(0);
  const [totalVentas, setTotalVentas] = useState(0);
  const [color, setColor] = useState(true);

  const [infoNuevaVenta, setinfoNuevaVenta] = useState({
    idCliente: venta.idCliente,
    nombreCliente: venta.nombreCliente,
    vendedor: venta.vendedor,
    estado: venta.estado,
    fecha: venta.fecha,
    valorTotal: venta.valorTotal,
    productos: venta.productos,
  });

  let history = useHistory();

  useEffect(() => {
    console.log("consulta", ejecutarConsultaProductos);
    if (ejecutarConsultaProductos) {
      obtenerProductos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductosVenta(response.data);
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

  const actualizarVenta = async (venta) => {
    console.log(infoNuevaVenta);

    await editarVenta(
      venta._id,
      {
        idCliente: infoNuevaVenta.idCliente,
        nombreCliente: infoNuevaVenta.nombreCliente,
        vendedor: usuarios.filter((v) => v._id === infoNuevaVenta.vendedor)[0],
        estado: infoNuevaVenta.estado,
        fecha: infoNuevaVenta.fecha,
        valorTotal: totalVentas,
        productos: Object.values([infoNuevaVenta.productos][0]),
      },
      (response) => {
        console.log(response.data);
        setEditar(false);

        Swal.fire("Actualizado!", "Usuario actualizado con exito.", "success");
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const actualizarProductos = (venta) => {
    setUserData(venta);
    history.push("/modificarventa");
  };

  useEffect(() => {
    let total = 0;
    Object.values(infoNuevaVenta.productos).forEach((f) => {
      total = total + f.total;
    });
    setTotalVentas(total);
    console.log(totalVentas);
    console.log(total);
  }, [infoNuevaVenta]);

  useEffect(() => {});

  return (
    <tr>
      {editar ? (
        <>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={venta._id}
              disabled
            ></input>
          </td>
          <td>
            <select
              className="inputForm"
              type="text"
              disabled
              defaultValue={infoNuevaVenta.vendedor._id}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  vendedor: e.target.value,
                })
              }
            >
              {usuarios.map((el) => {
                return <option value={el._id}>{el.name}</option>;
              })}
            </select>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={infoNuevaVenta.idCliente}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  idCliente: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={infoNuevaVenta.nombreCliente}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  nombreCliente: e.target.value,
                })
              }
            ></input>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto, number) => (
                <tr key={number}>
                  <td className="border-transparent">
                    <select
                      className="inputForm"
                      type="text"
                      defaultValue={producto._id}
                      onChange={(e) => {
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,

                          productos: {
                            ...infoNuevaVenta.productos,

                            [number]: productosVenta.filter(
                              (v) => v._id === e.target.value
                            )[0],
                          },
                        });
                      }}
                    >
                      {productosVenta.map((el) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.nombreProducto}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              ))}
            </tr>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto, number) => (
                <tr key={number}>
                  <td className="border-transparent">
                    <input
                      className="inputForm"
                      type="text"
                      disabled
                      defaultValue={producto.precioUnidad}
                      onChange={(e) =>
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,

                          productos: {
                            ...venta.productos,
                            [number]: {
                              ...[number],

                              precioUnidad: e.target.value,
                            },
                          },
                        })
                      }
                    ></input>
                  </td>
                </tr>
              ))}
            </tr>
          </td>

          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto, number) => (
                <tr key={number}>
                  <td className="border-transparent">
                    <input
                      className="inputForm"
                      type="text"
                      defaultValue={producto.cantidad}
                      onChange={(e) => {
                        setinfoNuevaVenta({
                          ...infoNuevaVenta,

                          productos: {
                            ...infoNuevaVenta.productos,
                            [number]: {
                              ...infoNuevaVenta.productos[number],

                              cantidad: e.target.value,
                              total:
                                parseFloat(producto.precioUnidad) *
                                parseFloat(e.target.value),
                            },
                          },
                        });
                      }}
                    ></input>
                  </td>
                </tr>
              ))}
            </tr>
          </td>

          <td>
            <input
              className="inputForm"
              type="text"
              defaultValue={totalVentas}
              disabled
              hidden
            ></input>
            {totalVentas}
          </td>

          <td>
            <input
              className="inputForm"
              type="date"
              defaultValue={venta.fecha}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  fecha: e.target.value,
                })
              }
            ></input>
          </td>

          <td>
            <select
              className="selectForm"
              type="text"
              defaultValue={venta.estado}
              onChange={(e) =>
                setinfoNuevaVenta({
                  ...infoNuevaVenta,
                  estado: e.target.value,
                })
              }
            >
              <option>Finalizada</option>
              <option>Anulada</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{venta._id.slice(15)}</td>
          <td>{Object.values(venta.vendedor.name)}</td>
          <td>{venta.idCliente}</td>
          <td>{venta.nombreCliente}</td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto) => (
                <tr>
                  <td className="border-transparent">
                    {producto.nombreProducto}
                  </td>
                </tr>
              ))}
            </tr>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto) => (
                <tr>
                  <td className="border-transparent">
                    {producto.precioUnidad}
                  </td>
                </tr>
              ))}
            </tr>
          </td>
          <td>
            <tr className="border-transparent">
              {venta.productos.map((producto) => (
                <tr>
                  <td className="border-transparent">{producto.cantidad}</td>
                </tr>
              ))}
            </tr>
          </td>
          <td>{venta.valorTotal}</td>
          <td>{venta.fecha}</td>
          <td>
            <td
              className={
                venta.estado == "Anulada"
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }
            >
              {venta.estado}
            </td>
          </td>
        </>
      )}
      <PrivateVenta roleList={[true]}>
        <PrivateComponent roleList={["Vendedor"]}>
          <td>
            {editar ? (
              <i
                onClick={() => {
                  actualizarVenta(venta);
                }}
              >
                <img class="icono" src={check} alt="check" />
              </i>
            ) : (
              <i
                onClick={() => {
                  setEditar(!editar);
                }}
              >
                <img class="icono" src={edit} alt="Editar" />
              </i>
            )}
          </td>
        </PrivateComponent>
        <PrivateComponent roleList={["Administrador"]}>
          <td>
            <i
              onClick={() => {
                actualizarProductos(venta);
              }}
            >
              <img class="icono" src={edit} alt="Editar" />
            </i>
          </td>
        </PrivateComponent>
      </PrivateVenta>
    </tr>
  );
};
export default TablaVenta;
