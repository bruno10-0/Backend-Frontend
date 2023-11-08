import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios"
import Nav from '../components/Barra.Navegacion';
import { useState, useEffect } from 'react';
import {createCustomIcon} from "../functions/custonIcon.js"
export const Mapa = () => {
  const posadasCoordinates = [-27.3671, -55.8961]; // Coordenadas de Posadas, Misiones, Argentina
  const [markerCoordinates, setMarkerCoordinates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:3000/api/publicacion');
        console.log(res.data);
        setMarkerCoordinates(res.data);
      } catch (error) {
        console.error('Error al obtener las coordenadas:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className="w-auto h-auto flex justify-around">
      <Nav />
      <div className="w-full h-screen md:flex">
        <div className="w-full h-20 md:hidden"></div>
        <div className="hidden md:block w-12 h-full lg:w-2/12"></div>
        <div className="w-full h-full md:mx-auto md:w-11/12 lg:w-4/5">
          <MapContainer
            center={posadasCoordinates}
            zoom={12}
            style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {markerCoordinates.map((ubi) => (
              <Marker key={ubi.id} position={[ubi.lat, ubi.lon]} icon={createCustomIcon(ubi)}>
                <Popup>
                  Tipo: {ubi.titulo}
                  <br />
                  Usuario: {ubi.Usuario.name}
                  <br />
                  Celular: {ubi.Usuario.phoneNumber}
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>
      </div>
    </div>
  );
};
