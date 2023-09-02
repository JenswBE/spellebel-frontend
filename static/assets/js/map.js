// Basic setup
const coord = {
  lat: 51.31812,
  lng: 4.85585,
};
var map = L.map("spellebel-map", {
  dragging: false,
  scrollWheelZoom: false,
  inertia: false,
  noMoveStart: true,
  tap: false,
}).setView(coord, 16);

// Add map tile layer
const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    id: colorSchemeSwitch(
      "mapbox/streets-v11",
      "mapbox/dark-v10",
      "mapbox/streets-v11"
    ),
    accessToken:
      "pk.eyJ1Ijoic3BlbGxlYmVsIiwiYSI6ImNrdmd2bTBtNDBjN2syb212eTNqcWJvb2sifQ.QE8kTzgj8FL8b8V7jmjkWA",
  }
).addTo(map);

var icon = L.icon({
  iconUrl: "/assets/img/map-marker.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25],
  popupAnchor: [0, -25],
});

// Add marker
var marker = L.marker(coord, { icon: icon }).addTo(map);

// Handle light/dark changes
function colorSchemeSwitch(lightValue, darkValue, fallbackValue) {
  if (!window.matchMedia) {
    return fallbackValue;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? darkValue
    : lightValue;
}
