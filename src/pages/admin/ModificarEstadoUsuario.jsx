import Swal from "sweetalert2";
import React from "react";
import { useFormik } from "formik";
import ContenedorTitulos from "../../components/ContenedorTitulos";
import { crearUsuario } from "../../utils/api";
const ModificarEstadoUsuario = () => {
  const formik = useFormik({
    //valores iniciales para formulario con formik
    initialValues: {
      idUsuario: "",
      rolUsuario: "",
      estadoUsuario: "",
      modificarProducto: "",
      modificarUsuario: "",
      añadirProducto: "",
      añadirUsuario: "",
    },

    //Validacion de datos de formulario con yup

    //Enviar valores

    onSubmit: (values, { resetForm }) => {
      crearUsuario({
        idUsuario: values.idUsuario,
        rolUsuario: values.rolUsuario,
        estadoUsuario: values.estadoUsuario,
        modificarProducto: values.modificarProducto,
        modificarUsuario: values.modificarUsuario,
        añadirProducto: values.añadirProducto,
        añadirUsuario: values.añadirUsuario,
      });
      console.log("enviando..");

      console.log(values);

      //alerta de swal al agregar producto

      Swal.fire({
        position: "center",
        icon: "success",
        title: "El producto a sido registrado",
        timer: 1500,
      });

      resetForm();
    },
  });

  return (
    <div className="contenedorFormulario">
      <section>
        <ContenedorTitulos Titulo="Modificar estado de usuario" />
      </section>
      <form className="formulario" onSubmit={formik.handleSubmit}>
        <section>
          <label className="labelForm" htmlFor="idUsuario">
           Nombre  Usuario:
          </label>
          <input
            className="inputForm"
            id="idUsuario"
            placeholder="Ingrese el id del Usuario"
            type="ID"
            value={formik.values.idUsuario}
            onChange={formik.handleChange}
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="estadoUsuario">
            Estado del usuario:
          </label>
          <select
            className="selectForm"
            id="estadoUsuario"
            onChange={formik.handleChange}
            value={formik.values.estadoUsuario}
          >
            <option>En espera</option>
            <option>Autorizado</option>
            <option>No autorizado</option>
          </select>
        </section>

        <section>
          <label className="labelForm" htmlFor="rolUsuario">
            Rol del usuario:
          </label>
          <select
            className="selectForm"
            id="rolUsuario"
            onChange={formik.handleChange}
            value={formik.values.rolUsuario}
          >
            <option>Sin asignar</option>
            <option>Vendedor</option>
            <option>Administrador</option>
          </select>
        </section>

        <h4 className="text-2xl font-extrabold text-gray-800 pb-10 py-10 ml-10">
          Permisos de usuario
        </h4>

        <section>
          <label className="labelForm" htmlFor="modificarProducto">
            Modificar Productos:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="modificarProducto"
            onChange={formik.handleChange}
            value={formik.values.modificarProducto}
          />
          <label className="labelcheck">{`${formik.values.modificarProducto}`}</label>
        </section>

        <section>
          <label className="labelForm" htmlFor="añadirProducto">
            Añadir Productos:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="añadirProducto"
            onChange={formik.handleChange}
            value={formik.values.añadirProducto}
          />
          <label className="labelcheck">{`${formik.values.añadirProducto}`}</label>
        </section>
        <section>
          <label className="labelForm" htmlFor="modificarUsuario">
            Modificar Usuarios:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="modificarUsuario"
            onChange={formik.handleChange}
            value={formik.values.modificarUsuario}
          />
          <label className="labelcheck">{`${formik.values.modificarUsuario}`}</label>
        </section>

        <section className="">
          <label className="labelForm" htmlFor="añadirUsuario">
            Añadir Usuarios:{" "}
          </label>

          <input
            className="inputcheck"
            type="checkbox"
            id="añadirUsuario"
            onChange={formik.handleChange}
            value={formik.values.añadirUsuario}
          />
          <label className="labelcheck">{`${formik.values.añadirUsuario}`}</label>
        </section>

        <section className="flex flex-grow  justify-around">
          <button className="buttonForm" type="submit">
            Guardar
          </button>
          <button className="buttonForm" type="button">
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default ModificarEstadoUsuario;
