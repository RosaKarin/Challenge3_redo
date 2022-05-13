
	// Add the map to the page
  mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYWthcmluIiwiYSI6ImNrOHI4Njh1djAwbmYzZnFmbTB5M2s3ZmcifQ.NqmAg6EdHGHjWpmsr2XxgQ';
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [4.322840, 52.067101],
      zoom: 11.15
  });

  // Add the control to the page
  const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
  });

  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


  function getAPIdata() {

    var url = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey ='4e30323e9106e314cab4f102762a1c2c';
    var city = document.getElementById('geocoder').value;
  
    // construct request
    var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
    
    // get current weather
    fetch(request)
    
    // parse to JSON format
    .then(function(response) {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })
    
    // render weather per day
    .then(function(response) {
      // render weatherCondition
      onAPISucces(response);	
    })
    
    // catch error
    .catch(function (error) {
      onAPIError(error);
    });
  }

  
  function onAPISucces(response) {
    // get type of weather in string format
    var type = response.weather[0].description;
  
    // get temperature in Celcius
    var degC = Math.floor(response.main.temp - 273.15);
  
    // render weather in DOM
    var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = degC + '&#176;C <br>' + type;
  }

// // // Set api token
// mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYWthcmluIiwiYSI6ImNrOHI4Njh1djAwbmYzZnFmbTB5M2s3ZmcifQ.NqmAg6EdHGHjWpmsr2XxgQ';

// // // Initialate map
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [4.322840, 52.067101],
//   zoom: 6.3,
//   pitch: 25,

// });

// map.addControl(new mapboxgl.NavigationControl()); //zorgt voor inzoom/uitzoom controlls


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


// // Den Haag
// var popup = new mapboxgl.Popup().setHTML('<h3>Den Haag</h3><p>It is currently 11 degrees with an overcast of clouds</p>');
// var marker = new mapboxgl.Marker()
//   .setLngLat([4.312982, 52.077785])
//   .setPopup(popup)
//   .addTo(map);

// // Rotterdam
// var popup = new mapboxgl.Popup().setHTML('<h3>Rotterdam</h3><p>It is currently 11 degrees with an overcast of clouds</p>');
// var marker = new mapboxgl.Marker()
//   .setLngLat([4.47917, 51.9225])
//   .setPopup(popup)
//   .addTo(map);

// // Amsterdam
// var popup = new mapboxgl.Popup().setHTML('<h3>Amsterdam</h3><p>It is currently 10 degrees with an light intensity drizzle</p>');
// var marker = new mapboxgl.Marker()
//   .setLngLat([4.895168, 52.370216])
//   .setPopup(popup)
//   .addTo(map);

// // Groningen
// var popup = new mapboxgl.Popup().setHTML('<h3>Groningen</h3><p>It is currently 10 degrees with an light intensity drizzle</p>');
// var marker = new mapboxgl.Marker()
//   .setLngLat([6.56667, 53.21917])
//   .setPopup(popup)
//   .addTo(map);

  


