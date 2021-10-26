import ContenedorTitulos from "../../components/ContenedorTitulos";
import React, { useState, useEffect, useRef } from "react";
import { crearVenta, editarVenta, obtenerProductos } from "../../utils/api";
import { obtenerUsuarios } from "../../utils/api";
import Swal from "sweetalert2";
import { useUser } from "../../context/userContext";
import { useHistory } from "react-router-dom";

const RegistrarVenta = () => {
  const form = useRef(null);
  const [usuarios, setUsuarios] = useState([]);
  const { userData } = useUser();

  const [venta, setVenta] = useState(userData);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);
  const [fecha, setFecha] = useState(venta.fecha);
  const [idCliente, setIdCliente] = useState(venta.idCliente);
  const [nombreCliente, setNombreCliente] = useState(venta.nombreCliente);
  const [estado, setEstado] = useState(venta.estado);

  let history = useHistory();

  console.log(venta.vendedor);

  useEffect(() => {
    const fetchUsuarios = async () => {
      await obtenerUsuarios(
        (response) => {
          setUsuarios(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchUsuarios();
    fetchProductos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });

    console.log("form data", formData);

    console.log();

    const listaProductos = Object.keys(formData)
      .map((k) => {
        if (k.includes("producto")) {
          return productosTabla.filter((v) => v._id === formData[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    const datosVenta = {
      vendedor: usuarios.filter((v) => v._id === formData.vendedor)[0],
      valorTotal: formData.valor,
      productos: listaProductos,
      fecha: fecha,
      idCliente: idCliente,
      nombreCliente: nombreCliente,
      estado: estado,
    };

    await editarVenta(
      venta._id,
      datosVenta,
      (response) => {
        console.log(response);
        Swal.fire("Registrado!", "Venta creada con exito.", "success");
      },
      (error) => {
        console.error(error);
      }
    );
  };
  if (venta.vendedor == undefined) {
    return <>Error no ha seleccionado venta para modificar</>;
  }
  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Modificar Ventas" />
      </section>

      <form ref={form} onSubmit={submitForm} className="flex flex-col h-full">
        <section className="flex flex-row">
          <section className="flex flex-col">
            <div className="field boton fecha">
              <label className="fecha">Fecha de venta</label>
              <input
                className="fecha"
                type="date"
                name="fecha"
                defaultValue={venta.fecha}
                required
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className="field large">
              <label for="">Id Cliente:</label>
              <input
                className="inputForm"
                type="number"
                placeholder="Ingrese el id del cliente"
                defaultValue={venta.idCliente}
                onChange={(e) => setIdCliente(e.target.value)}
                required
              />
            </div>
            <div className="field large">
              <label for="">Nombre Cliente:</label>
              <input
                className="inputForm"
                type="text"
                placeholder="Ingrese el nombre del cliente"
                defaultValue={venta.nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
                required
              />
            </div>

            <label for="">Estado:</label>
            <select
              className="selectForm"
              type="text"
              defaultValue={venta.estado}
              onChange={(e) => setEstado(e.target.value)}
              
            >
              <option>Finalizada</option>
              <option>Anulada</option>
            </select>
          

            <div className="field large">
              <label for="vendedor">Vendedor:</label>
              <input
                className="inputForm"
                name="vendedor"
                type="text"
                disabled
                defaultValue={venta.vendedor.name}
                required
              />
              <label for="vendedor">Id:</label>
              <input
                className="inputForm"
                name="vendedor"
                type="text"
                disabled
                defaultValue={venta.vendedor._id}
                required
              />
            </div>
          </section>
          <section className="ml-10 mr-10">
            <TablaProductos
              productos={productos}
              setProductos={setProductos}
              setProductosTabla={setProductosTabla}
            />
          </section>
          <div>
            <button
              type="submit"
              className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5"
            >
              Modificar
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
  const [productoAAgregar, setProductoAAgregar] = useState({});
  const [totalVentas, setTotalVentas] = useState(0);
  const { userData } = useUser();

  const [venta, setVenta] = useState(userData);
  const [filasTabla, setFilasTabla] = useState(venta.productos);

  console.log(venta.productos);
  console.log(filasTabla);

  useEffect(() => {
    setProductosTabla(filasTabla);
  }, [filasTabla, setProductosTabla]);

  const agregarNuevoProducto = () => {
    setFilasTabla([...filasTabla, productoAAgregar]);
    setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
    setProductoAAgregar({});
  };

  const eliminarProducto = (productoAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
    setProductos([...productos, productoAEliminar]);
  };

  const modificarProducto = (producto, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto._id) {
          ft.cantidad = cantidad;
          ft.total = producto.precioUnidad * cantidad;
        }
        return ft;
      })
    );
  };
  useEffect(() => {
    let total = 0;
    filasTabla.forEach((f) => {
      total = total + f.total;
    });

    setTotalVentas(total);
  }, [filasTabla]);

  return (
    <div>
      <div className="flex ">
        <label className="flex flex-col" htmlFor="producto">
          <select
            className="inputForm"
            value={productoAAgregar._id ?? ""}
            onChange={(e) =>
              setProductoAAgregar(
                productos.filter((v) => v._id === e.target.value)[0]
              )
            }
          >
            <option disabled value="">
              Seleccione un Producto
            </option>
            {productos.map((el) => {
              return (
                <option key={el._id} value={el._id}>
                  {el.nombreProducto}
                </option>
              );
            })}
          </select>
        </label>
        <button
          type="button"
          onClick={() => agregarNuevoProducto()}
          className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5"
        >
          Agregar Producto
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Proveedor</th>
            <th>Valor Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
            <th className="hidden">Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaProducto
                key={el._id}
                pro={el}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />
            );
          })}
        </tbody>
      </table>
      <section className="mt-16">
        {" "}
        <label className="">
          <span className="text-2xl font-gray-900 mr-6">
            Valor Total Venta:
          </span>
          <td> {totalVentas}</td>
          <input
            className="inputForm"
            type="number"
            name="valor"
            placeholder="Valor total de venta"
            value={totalVentas}
            required
            hidden
          ></input>
        </label>
      </section>
    </div>
  );
};

const FilaProducto = ({ pro, index, eliminarProducto, modificarProducto }) => {
  const { userData } = useUser();
  const [producto, setProducto] = useState(pro);
  const [venta, setVenta] = useState(userData);

  useEffect(() => {
    console.log("pro", producto);
  }, [producto]);

  return (
    <>
      <tr>
        <td>{producto._id}</td>
        <td>{producto.nombreProducto}</td>
        <td>{producto.proveedor}</td>
        <td>{producto.precioUnidad}</td>
        <td>
          <input
            className="inputFormCantidad"
            type="number"
            name={`cantidad_${index}`}
            value={producto.cantidad}
            onChange={(e) => {
              setProducto({
                ...pro,
                cantidad: e.target.value === "" ? "0" : e.target.value,
                total:
                  parseFloat(producto.precioUnidad) *
                  parseFloat(e.target.value === "" ? "0" : e.target.value),
              });
              modificarProducto(
                producto,
                e.target.value === "" ? "0" : e.target.value
              );
            }}
          />
        </td>
        <td>{parseFloat(producto.total ?? 0)}</td>
        <td>
          <i
            onClick={() => eliminarProducto(producto)}
            className="fas fa-minus text-red-500 cursor-pointer"
          >
            eliminar
          </i>
        </td>
        <td className="hidden">
          <input
            hidden
            defaultValue={producto._id}
            name={`producto_${index}`}
          />
        </td>
      </tr>
    </>
  );
};

export default RegistrarVenta;
