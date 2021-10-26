import React from 'react'
import { useUsuario } from '../context/usuarioContext';

const ModificarPrivateProduct = ({roleList, children}) => {
    const { usuarioData }= useUsuario();
  if(roleList.includes(usuarioData.modificarProducto)){
      return children;
  }



  return <></>
}

export default ModificarPrivateProduct
