mapboxgl.accessToken = "pk.eyJ1IjoibWFraW1ha29vbyIsImEiOiJjbWVkNXFnZHcwNml2MmxwZjdzOXR5YnFhIn0.qlVlen_tyYgJshSRbdwdgg";

const map = new mapboxgl.Map({
  container: "mapbox-container", 
  style: "mapbox://styles/mapbox/dark-v11",
  center: [30.5234, 50.4501], 
  zoom: 10,
});

new mapboxgl.Marker({ color: "green" }) 
  .setLngLat([30.5238, 50.4501]) 
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) 
      .setHTML("<h3>Крещатик</h3><p>Центр Киева</p>")
  )
  .addTo(map);

  map.on("load", () => {
  // Добавляем 3D-здания
  const layers = map.getStyle().layers;
  let labelLayerId;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer(
    {
      id: "3d-buildings",
      source: "composite",
      "source-layer": "building",
      filter: ["==", "extrude", "true"],
      type: "fill-extrusion",
      minzoom: 15,
      paint: {
        "fill-extrusion-color": "#aaa", // цвет зданий
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-base": ["get", "min_height"],
        "fill-extrusion-opacity": 0.8,
      },
    },
    labelLayerId
  );
});