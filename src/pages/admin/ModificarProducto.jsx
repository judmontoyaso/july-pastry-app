import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import ContenedorTitulos from "../../components/ContenedorTitulos";

const ModificarProducto = () => {

  
  const formik = useFormik({
    
    //valores iniciales para formulario con formik
    initialValues: {
      idProducto: "",
      nombreProducto: "",
      proveedor: "",
      precioUnidad: "",
      inventario: "",
      imagen: "",
    },

    //Validacion de datos de formulario con yup
    validationSchema: Yup.object({
      idProducto: Yup.string().required("El id es obligatorio"),
      nombreProducto: Yup.string().required("El nombre es obligatorio"),
      proveedor: Yup.string().required("El proveedor es obligatorio"),
      precioUnidad: Yup.string().required(
        "El precio por unidad es obligatorio"
      ),
      inventario: Yup.number().required(
        "La cantidad disponible es obligatoria"
      ),
    }),

    //Enviar valores

    onSubmit: (values) => {
      console.log("enviando..");
      console.log(values);

      //alerta de swal al agregar producto

      Swal.fire({
        position: "center",
        icon: "success",
        title: "El producto a sido registrado",
        timer: 1500,
      });
    },
  });

  return (
    <div className="contenedorFormulario">
      <section>
              <ContenedorTitulos Titulo = "Modificar producto"/>
          </section>

      {/*  //Formulario  */}

      <form className="formulario" onSubmit={formik.handleSubmit}>
        <section>

          <label className="labelForm" htmlFor="idProducto">
            Id Producto:
          </label>

          <input
            className="inputForm"
            id="idProducto"
            placeholder="Ingrese el id del producto"
            type="ID"
            onChange={formik.handleChange}
            value={formik.values.idProducto}
          ></input>

        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.idProducto && formik.errors.idProducto ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.idProducto}</p>
          </div>
        ) : null}

        <section>
          <label className="labelForm" htmlFor="nombreProducto">
            Nombre Producto:
          </label>
          <input
            className="inputForm"
            id="nombreProducto"
            placeholder="Ingrese el nombre del producto"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nombreProducto}
          ></input>
        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.nombreProducto && formik.errors.nombreProducto ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.nombreProducto}</p>
          </div>
        ) : null}

        {/*input de formulario, con formik*/}

        <section>
          <label className="labelForm" htmlFor="proveedor">
            Proveedor:
          </label>
          <input
            className="inputForm"
            id="proveedor"
            placeholder="Ingrese el nombre del proveedor del producto"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.proveedor}
          ></input>
        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.proveedor && formik.errors.proveedor ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.proveedor}</p>
          </div>
        ) : null}

        <section>
          <label className="labelForm" htmlFor="precioUnidad">
            Precio por unidad:
          </label>
          <input
            className="inputForm"
            id="precioUnidad"
            placeholder="Ingrese el precio por unidad del producto"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.precioUnidad}
          ></input>
        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.precioUnidad && formik.errors.precioUnidad ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.precioUnidad}</p>
          </div>
        ) : null}

        <section>
          <label className="labelForm" htmlFor="inventario">
            Cantidad disponible:
          </label>
          <input
            className="inputForm"
            id="inventario"
            placeholder="Ingrese La cantidad disponible del producto"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.inventario}
          ></input>
        </section>

        {/* validación con yup para que no deje el campo vacio */}
        {formik.touched.inventario && formik.errors.inventario ? (
          <div className="mensaje">
            <p className="p">Error</p>
            <p>{formik.errors.inventario}</p>
          </div>
        ) : null}

        <section>
          <label className="labelForm" htmlFor="imagen">
            Imagen del producto:
          </label>
          <input
            className="inputForm"
            id="imagen"
            placeholder="Adjunte una imagen del producto"
            type="file"
            onChange={formik.handleChange}
            value={formik.values.imagen}
          ></input>
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
    )
}

export default ModificarProducto
