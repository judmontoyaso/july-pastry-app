import React from "react";
import usuarios from "../media/usuarios.jpeg";
import ventas from "../media/ventas.jpeg";
import tortaEspiralGrande from "../media/tortaEspiralGrande.jpeg";
import clientes from "../media/clientes.jpeg";

const Index = () => {
  return (
    <div>
      <section className="">
        <section>
          <h1 class=" h-full w-full text-xl md: text:6xl mf lg:text-9xl flex object-center font-serif font-medium  text-yellow-700 my-44 justify-center">
            Admin Juli's Pastry
          </h1>
          <p class="w-full h-full text-lg md: text:xl mf lg:text-3xl text-center font-serif  text-yellow-900 my-20">
            Aplicacion web de administracion de ventas para una empresa en
            crecimiento, donde se logra tener control de la gestion de roles de
            usuarios, productos, clientes, ventas, informes mensuales. Con
            diferentes herramientas para visuaizar el flujo de productos y
            manejo de bases de datos.
          </p>
        </section>

        <section flex>
          <h2 class="h-full w-full text-xl md: text:3xl mf lg:text-6xl flex object-center font-serif font-medium  text-yellow-700 my-24 justify-center">
            Herramientas
          </h2>
          <div>
            <ul class="flex">
              <li class="inline-block p-2 m-10 bg-red-100 rounded-lg text-xl md: text:2xl mf :text-3xl font-serif justify-center text-center text-yellow-700">
                Gestion de Usuarios
                <img class="" src={tortaEspiralGrande} alt="foto muffin" />
              </li>
              <li class="inline-block p-2 m-10  bg-red-100 rounded-lg text-xl md: text:2xl mf :text-3xl font-serif justify-center text-center text-yellow-700">
                Gestion de ventas
                <img class="" src={tortaEspiralGrande} alt="foto muffin" />
              </li>
              <li class="inline-block p-2 m-10 bg-red-100 rounded-lg text-xl md: text:2xl mf :text-3xl font-serif justify-center text-center text-yellow-700">
                Gestion de productos
                <img class="" src={tortaEspiralGrande} alt="foto muffin" />
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Index;
