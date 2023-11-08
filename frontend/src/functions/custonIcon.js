import L from 'leaflet'; // Importa la clase L.Icon

export const createCustomIcon = (ubi) => {
    let iconUrl = '';
    
    // Evalúa el valor de ubi.titulo y asigna la URL del icono correspondiente
    switch (ubi.titulo) {
      case "Calle en mal estado":
        iconUrl = 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1699471099/img/fxffnn6q5tof5xxasaws.png';
        break;
      case "Ruidos Molestos":
        iconUrl = 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1699470975/img/mrt1veq8b0muu1u8eafl.png';
        break;
      case "Árbol caído":
        iconUrl = 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1699470898/img/jhgv57gsxfqojol5ncsg.png';
        break;
      case "Infraestructura obsoleta":
        iconUrl = 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1699470767/img/ielz7qrcef9agqshc8hz.png';
        break;
      default:
        iconUrl = 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1699471608/img/diazlntipfb0rujegasb.png';
    }
  
    return new L.Icon({
      iconUrl: iconUrl,
      iconSize: [25,30], // Tamaño del icono
      iconAnchor: [25, 30], // Punto de anclaje del icono
      popupAnchor: [-12, -25] // Punto de anclaje del popup
    });
  };