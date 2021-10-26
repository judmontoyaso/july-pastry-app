import React from "react";
import ContenedorTitulos from "../../components/ContenedorTitulos";

const ModificarCliente = () => {
  
  return (
      
    <div className="contenedorFormulario w-full ml-80">
      <section>
              <ContenedorTitulos Titulo = "Modificar cliente"/>
          </section>
      <form className="formulario">
        <section>
          <label className="labelForm mt-20" htmlFor="idCliente">
            Id Cliente:
          </label>
          <input
            className="inputForm"
            id="idCliente"
            placeholder="Ingrese el id del cliente"
            type="ID"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="nombreCliente">
            Nombre Cliente:
          </label>
          <input
            className="inputForm"
            id="nombreCliente"
            placeholder="Ingrese el nombre del cliente"
            type="text"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="telefono">
            Telefono:
          </label>
          <input
            className="inputForm"
            id="telefono"
            placeholder="Ingrese el nombre del telefono del cliente"
            type="text"
          ></input>
        </section>

        <section>
          <label className="labelForm" htmlFor="email">
            e-mail:
          </label>
          <input
            className="inputForm"
            id="email"
            placeholder="Ingrese el e-mail del cliente"
            type="number"
          ></input>
        </section>

        <section className="flex flex-grow  justify-around">
          <button className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5" type="submit">
            Guardar
          </button>

          <button className="bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5"  type="button">
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default ModificarCliente;
