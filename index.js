mapboxgl.accessToken =
  "pk.eyJ1IjoidHlsZXJtbmVoZXIiLCJhIjoiY2xsNGYweHZxMDR6eDNkbnU5aGR0NW5uMiJ9.O4wT3LUF-Z_M-1E3ZKdO6g";

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/dark-v11", // style URL
  center: [-74.069803, 40.308372], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// MARKER
// Create a default Marker, colored blue, rotated 0 degrees.
const nds = new mapboxgl.Marker({ color: "blue", rotation: 0 })
  .setLngLat([-74.069803, 40.308372])
  .addTo(map);
