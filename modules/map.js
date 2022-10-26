import { fetchFallas } from "./fetch.js";
import { generateCircleIcon, generateHtmlContent } from "./ui.js";

const URL = "../resources/fallas.json";
const EXTERNAL_URL =
  "https://geoportal.valencia.es/apps/OpenData/Turismo/fallas.json"; // CORS error

export async function initMap(mapOptions) {
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const { features: fallas } = await fetchFallas(URL);

  fallas.forEach((falla) => {
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
      icon: generateCircleIcon("#0052CC"),
    });

    marker.addListener("click", () => infoWindow.open({ anchor: marker, map }));
  });
}
