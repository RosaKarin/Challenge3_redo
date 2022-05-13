// // Set api token
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYWthcmluIiwiYSI6ImNrOHI4Njh1djAwbmYzZnFmbTB5M2s3ZmcifQ.NqmAg6EdHGHjWpmsr2XxgQ';

// // Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [4.322840, 52.067101],
  zoom: 6.3,
  pitch: 25,

});

map.addControl(new mapboxgl.NavigationControl()); //zorgt voor inzoom/uitzoom controlls


//   style: 'mapbox://styles/mapbox/satellite-v9'
// Positioning the map on a certain longitute + latitude and zooming in
// Let op de volgorde van de lat, lon!!
// center: [4.322840, 52.067101],
// zoom: 15,

// // Add zoom and rotation controls to the map.
// // map.addControl(new mapboxgl.NavigationControl()); 

// Set api token
// mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYWthcmluIiwiYSI6ImNrOHI4Njh1djAwbmYzZnFmbTB5M2s3ZmcifQ.NqmAg6EdHGHjWpmsr2XxgQ';

// // Initialate map
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [4.322840, 52.067101],
//   zoom: 11.15
// });

// // Voeg de zoekbalk toe
// map.addControl(
//   new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
//   }),
//   'top-right'
// );


// Den Haag
var popup = new mapboxgl.Popup().setHTML('<h3>Den Haag</h3><p>It is currently 11 degrees with an overcast of clouds</p>');
var marker = new mapboxgl.Marker()
  .setLngLat([4.312982, 52.077785])
  .setPopup(popup)
  .addTo(map);

// Rotterdam
var popup = new mapboxgl.Popup().setHTML('<h3>Rotterdam</h3><p>It is currently 11 degrees with an overcast of clouds</p>');
var marker = new mapboxgl.Marker()
  .setLngLat([4.47917, 51.9225])
  .setPopup(popup)
  .addTo(map);

// Amsterdam
var popup = new mapboxgl.Popup().setHTML('<h3>Amsterdam</h3><p>It is currently 10 degrees with an light intensity drizzle</p>');
var marker = new mapboxgl.Marker()
  .setLngLat([4.895168, 52.370216])
  .setPopup(popup)
  .addTo(map);

// Groningen
var popup = new mapboxgl.Popup().setHTML('<h3>Groningen</h3><p>It is currently 10 degrees with an light intensity drizzle</p>');
var marker = new mapboxgl.Marker()
  .setLngLat([6.56667, 53.21917])
  .setPopup(popup)
  .addTo(map);

  


