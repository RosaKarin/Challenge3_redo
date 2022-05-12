
	mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYWthcmluIiwiYSI6ImNrOHI4Njh1djAwbmYzZnFmbTB5M2s3ZmcifQ.NqmAg6EdHGHjWpmsr2XxgQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-79.4512, 43.6568],
        zoom: 13
    });

    // Add the control to the map.
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

