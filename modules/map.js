import { fetchFallas } from "./fetch.js";

const URL = "../resources/fallas.json";

export async function initMap() {
  const valencia = { lat: 39.4699, lng: -0.3774 };
  const mapOptions = { zoom: 14, center: valencia, mapTypeId: "satellite" };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const fallas = await fetchFallas(URL);

  fallas.features.forEach((falla) => {
    const { nombre, lema, boceto } = falla.properties;
    const [lng, lat] = falla.geometry.coordinates;

    const infoWindow = new google.maps.InfoWindow({
      content: generateHtmlContent(nombre, lema, boceto),
      ariaLabel: nombre,
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      title: nombre,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8.5,
        fillColor: "#0052CC",
        fillOpacity: 0.6,
        strokeWeight: 0.4,
      },
    });

    marker.addListener("click", () => infoWindow.open({ anchor: marker, map }));
  });
}

function generateHtmlContent(nombre, lema, imagen) {
  return `<div id="content"> 
    <div id="siteNotice"> 
    </div> 
    <h1 id="firstHeading">Falla ${nombre}</h1>
    <div id="bodyContent">
    <img src="${imagen}" alt="${nombre}" width="200" height="200">
    <p>${lema}</p>
    </div> 
    </div>`;
}
