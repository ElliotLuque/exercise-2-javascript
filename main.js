import { initMap } from "./modules/map.js";

document.addEventListener("DOMContentLoaded", () => {
  const valencia = { lat: 39.4699, lng: -0.3774 };
  const mapOptions = { zoom: 14, center: valencia, mapTypeId: "satellite" };

  initMap(mapOptions);
});
