import React from 'react'
import { useUsuario } from '../context/usuarioContext';

const AgregarPrivateProduct = ({roleList, children}) => {
    const { usuarioData }= useUsuario();
  if(roleList.includes(usuarioData.añadirProducto)){
      return children;
  }



  return <></>
}

export default AgregarPrivateProduct
