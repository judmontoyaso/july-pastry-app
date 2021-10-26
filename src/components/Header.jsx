import React from "react";


import logo from "./img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";




const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <nav>
        <ul class="h-40 w-full bg-red-200 flex justify-between ">
          <li>
            <img className="h-32 m-4 " src={logo} alt="logo" />
          </li>

          <li>
          <button className="w-20 text-center justify-center m-4 inline-flex mt-12 mr-12 bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5" onClick={() => loginWithRedirect()}>Login</button>
          </li>


        </ul>
      </nav>
    </div>
  );
};

export default Header;
