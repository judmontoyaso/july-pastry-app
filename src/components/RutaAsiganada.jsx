import React from "react";
import { useUsuario } from "../context/usuarioContext";

const RutaAsignada = ({ roleList, children }) => {
  const { usuarioData } = useUsuario();
  if (roleList.includes(usuarioData.estadoUsuario)) {
    return children;
  }

  return (
    <>
      Gracias por registrarse en nuestra aplicación, su solicitud será
      gestionada en el menor tiempo posible.
    </>
  );
};

export default RutaAsignada;
