const generateCircleIcon = (color) => {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8.5,
    fillColor: color,
    fillOpacity: 0.6,
    strokeWeight: 0.4,
  };
};

const generateHtmlContent = (nombre, lema, imagen) => {
  return `<div id="content"> 
      <div id="siteNotice"> 
      </div> 
      <h1 id="firstHeading">Falla ${nombre}</h1>
      <div id="bodyContent">
      <img src="${imagen}" alt="${nombre}" width="200" height="200">
      <p>${lema}</p>
      </div> 
      </div>`;
};

export { generateCircleIcon, generateHtmlContent };
