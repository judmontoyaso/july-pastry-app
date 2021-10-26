import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import ContenedorTitulos from "../components/ContenedorTitulos";

const Clientes = () => {
  return (

    <div className="ml-96 md:mx-96">  
        <section>
          <ContenedorTitulos Titulo="Gestión de Clientes" />
        </section>
        <section className="place-content-center flex space-x-6">
                <input
                  className= 'w-25 h-10 my-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
                  id="idCliente"
                  placeholder="Buscar Clientes"
                  type="ID">  
                </input>


                <button className='bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5' type="submit" type="submit">
                  Buscar
                </button>
                <Link to="registrarcliente">
                  <button className='bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5' type="submit">Nuevo Cliente</button>
                </Link> 
        </section>

     
      <section>
        <table className= "tablaPrueba">
          <tr>
            <th >ID Cliente</th>
            <th >Nombre</th>
            <th >Telefono</th>
            <th >correo</th>
            <th >Editar</th>
          </tr>
          <tr>
            <td className="filaImparCliente">123456789123</td>
            <td className="filaImparCliente">Edna Gonzalez</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">ednag@gmail.com</td>
            <Link to="/modificarcliente">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParCliente">123456789124</td>
            <td className="filaParCliente">Mauricio Peña</td>
            <td className="filaParCliente">9874562</td>
            <td className="filaParCliente">mauro@gmail.com</td>
            <Link to="/modificarcliente">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImparCliente">123456789125</td>
            <td className="filaImparCliente">Juan Silva</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">juan@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParCliente">123456789126</td>
            <td className="filaParCliente"> Gloria Parra</td>
            <td className="filaParCliente">5720784</td>
            <td className="filaParCliente">gloria@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImparCliente">1234567891237</td>
            <td className="filaImparCliente">Dolores Castro</td>
            <td className="filaImparCliente">5720784</td>
            <td className="filaImparCliente">Dolores@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParCliente">1234567891237</td>
            <td className="filaParCliente">Pedro Garcia</td>
            <td className="filaParCliente">5720784</td>
            <td className="filaParCliente">Pedro@gmail.com</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Clientes;
