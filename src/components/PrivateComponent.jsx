import React from 'react'
import { useUsuario } from '../context/usuarioContext';

const PrivateComponent = ({roleList, children}) => {
    const { usuarioData }= useUsuario();
  if(roleList.includes(usuarioData.rolUsuario)){
      return children;
  }



  return <></>
}

export default PrivateComponent
