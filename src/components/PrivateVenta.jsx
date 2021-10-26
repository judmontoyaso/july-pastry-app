import React from 'react'
import { useUsuario } from '../context/usuarioContext';

const PrivateVenta = ({roleList, children}) => {
    const { usuarioData }= useUsuario();
  if(roleList.includes(usuarioData.modificarVenta)){
      return children;
  }



  return <></>
}

export default PrivateVenta
