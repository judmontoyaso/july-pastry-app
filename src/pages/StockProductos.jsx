import { Link } from "react-router-dom";
import muffinManzana from "../media/muffinManzana.jpeg";
import muffinZanahoria from "../media/muffinZanahoria.jpeg";
import TortaCircularGrande from "../media/TortaCircularGrande.jpeg";
import ContenedorTitulos from "../components/ContenedorTitulos";

const StockProductos = () => {
  return (
    <div className='max-w-full ml-20                '>
      <section>
        <ContenedorTitulos Titulo="Stock de productos" />
      </section>

      <section className="place-content-center flex space-x-6">           
        <input
          className='w-25 h-10 my-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
          id="idProducto"
          placeholder="Buscar Producto"
          type="ID"
        ></input>
        <button className= 'bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5' type="submit">
          Buscar
        </button>
        <Link to="registrarventa">
          <button className='bg-red-100 my-7 h-10 rounded-lg border cursor-pointer hover:bg-red-200 p-2 pl-5 pr-5'>Añadir a la venta</button>
        </Link> 
      </section>

      <section className="contenedorFormulario">
        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6 ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>

            <li className="elementos2">
              <ul className="contenidoProducto">
                Mini Muffins
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0002</li>
          </ul>
        </div>

        <div className="tarjetasProductosNoDispo">
          <input type="checkbox" disabled />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta circular grande
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0003</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta circular mediana
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0004</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta circular pequeña
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0005</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Mini Torta
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0006</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta en forma de Flor
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0007</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Torta en espiral pequeña
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0008</li>
          </ul>
        </div>

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Galletas de mantequilla
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 0009</li>
          </ul>
        </div>

      

        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Chocolates
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 00011</li>
          </ul>
        </div>
        <div className="tarjetasProductos">
          <input type="checkbox" />
          <ul className="contenedorTarjetasPro place-content-center flex space-x-6  ">
            <li>
              <img
                className="elementos1"
                src={muffinManzana}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={muffinZanahoria}
                alt="foto muffin"
              />
            </li>
            <li>
              <img
                className="elementos1"
                src={TortaCircularGrande}
                alt="foto muffin"
              />
            </li>
            <li className="elementos2">
              <ul className="contenidoProducto">
                Cakecicles
                <li className="contenidoProducto">
                  Sabores: Zanahoria, manzana, banano y maracuyá.{" "}
                </li>
                <li className="contenidoProducto">$ / unidad:</li>
              </ul>
            </li>
            <li className="identificador">ID 00012</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StockProductos;
