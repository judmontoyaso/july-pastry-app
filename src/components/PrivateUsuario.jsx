import React from 'react'
import { useUsuario } from '../context/usuarioContext';

const PrivateUsuario = ({roleList, children}) => {
    const { usuarioData }= useUsuario();
  if(roleList.includes(usuarioData.modificarUsuario)){
      return children;
  }



  return <></>
}

export default PrivateUsuario
