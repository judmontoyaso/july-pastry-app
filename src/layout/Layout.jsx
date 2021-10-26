import React from "react";
import PrivateRoute from "../components/PrivateRoute";
import RutaAsignada from "../components/RutaAsiganada";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { obtenerDatosUsuario } from "../utils/api";
import { useUsuario } from "../context/usuarioContext";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
    logout,
  } = useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUsuarioData } = useUsuario();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      // si se quieren hacer validaciones con el token:
      // if (localStorage.getItem('token')) {
      //   // validar fecha de expiracion del token
      // } else {
      //   // pedir token
      // }

      // 1. pedir token a auth0
      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-julyspastry`,
      });
      localStorage.setItem("token", accessToken);
      console.log(accessToken);

      await obtenerDatosUsuario(
        (response) => {
          console.log("response", response);
          setUsuarioData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log("err", err);
          setLoadingUserInformation(false);
          logout({ returnTo: 'https://radiant-beyond-55605.herokuapp.com/panel' });
        }
      );
    };

    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUsuarioData]);

  if (isLoading || loadingUserInformation){
    return (
      <ReactLoading type="bars" color="#ffe5d9" height={"20%"} width={"20%"} />
    );
  }

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
    <div className="flex w-screen">
      <div className="flex flex-col md:flex-row flex-nowrap h-full w-full">
        <Sidebar />
        <RutaAsignada roleList={["Autorizado"]}>
          <main>{children}</main>
        </RutaAsignada>
      </div>
    </div>
  );
};

export default Layout;
