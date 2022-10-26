import { fetchFallas } from "./fetch.js";

export async function initMap() {
  const valencia = { lat: 39.4699, lng: -0.3774 };
  const mapOptions = { zoom: 14, center: valencia, mapTypeId: "satellite" };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const URL = "../resources/fallas.json";

  fetchFallas(URL).then((json) => {
    const fallaArray = json.features;

    fallaArray.forEach((falla) => {
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
      });

      marker.addListener("click", () =>
        infoWindow.open({ anchor: marker, map })
      );
    });
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
