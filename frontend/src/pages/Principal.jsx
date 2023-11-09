import { useState, useEffect } from 'react';
import Publicacion from '../components/Publicacion';
import Nav from '../components/Barra.Navegacion';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext'
import { getPublicaciones } from '../api/auth.js';
import { AlDia } from '../components/AlDia.jsx';
import { NoHay } from '../components/noHay';
function Principal() {
  const [publicacion, setPublicacion] = useState([]);

  const Listado = async () => {
    try {
      const respuesta = await getPublicaciones();
      setPublicacion(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Listado();
  }, []);

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/ingresar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <>
      <div className=" w-auto h-auto flex justify-center">
        <Nav />
        <div className='sm:w-screen mb-4 md:mt-0 md:mb-0 md:w-1/2 sm:mt-20  sm:items-center'>
          <div className='bg-transparent w-full h-20 md:hidden'></div>
          {publicacion.map((publicacion) => (
            <Publicacion key={publicacion.id} publicacion={publicacion} />
          ))}
          {publicacion.length > 0 ? <AlDia /> : <NoHay />}
        </div>
        <div className="fixed top-0 right-0 w-52 h-screen bg-gray-200 p-4">
        </div>
      </div>
    </>
  );
}

export default Principal;
