import { Link } from "react-router-dom";
import edit from "../media/edit.png";
import ContenedorTitulos from "../components/ContenedorTitulos";

const Usuarios = () => {
  return (
    <div>
      <section>
        <ContenedorTitulos Titulo="Gestión de Usuarios" />
      </section>
      <section>
        <ul className="contenedorBotonesgrises">
          <form>
            <section>
              <input
                className="inputForm"
                id="idusUario"
                placeholder="Buscar Usuario"
                type="ID"
              ></input>
            </section>
            <section className="flex-grow justify-between">
              <button className="buttonForm" type="submit">
                Buscar
              </button>
            </section>
          </form>
        </ul>
      </section>

      <section>
        <table>
          <tr>
            <td className="tituloColumnaUsu">IDUsuario</td>
            <td className="tituloColumnaUsu">Nombre</td>
            <td className="tituloColumnaUsu">Telefono</td>
            <td className="tituloColumnaUsu">Fecha Ingreso</td>
            <td className="tituloColumnaUsu">Rol</td>
            <td className="tituloColumnaUsu">Gestionar</td>
          </tr>
          <tr>
            <td className="filaImparUsu">123456789123</td>
            <td className="filaImparUsu">Edna Gonzalez</td>
            <td className="filaImparUsu">5720784</td>
            <td className="filaImparUsu">5/e/2020</td>
            <td className="filaImparUsu">Vendedor</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParUsu">123456789124</td>
            <td className="filaParUsu">Mauricio Peña</td>
            <td className="filaParUsu">9874562</td>
            <td className="filaParUsu">15/03/2021</td>
            <td className="filaParUsu">Vendedor</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImparUsu">123456789125</td>
            <td className="filaImparUsu">Juan Silva</td>
            <td className="filaImparUsu">5720784</td>
            <td className="filaImparUsu">25/02/2020</td>
            <td className="filaImparUsu">Vendedor</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParUsu">123456789126</td>
            <td className="filaParUsu">Juli's Pastry</td>
            <td className="filaParUsu">5720784</td>
            <td className="filaParUsu">18/01/2020</td>
            <td className="filaParUsu">Vendedor</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaImparUsu">1234567891237</td>
            <td className="filaImparUsu">Juli's Pastry</td>
            <td className="filaImparUsu">5720784</td>
            <td className="filaImparUsu">02/02/2021</td>
            <td className="filaImparUsu">Vendedor</td>
            <Link to="/modificarestadousuario">
              <span>
                <img class="icono" src={edit} alt="Editar" />
              </span>
            </Link>
          </tr>
          <tr>
            <td className="filaParUsu">1234567891237</td>
            <td className="filaParUsu">Juli's Pastry</td>
            <td className="filaParUsu">5720784</td>
            <td className="filaParUsu">15/03/2021</td>
            <td className="filaParUsu">Vendedor</td>
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

export default Usuarios;
