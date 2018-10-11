// https://leafletjs.com/examples/quick-start/

// public access token for MapBox
// https://www.mapbox.com/account/
// pk.eyJ1IjoibW9zc3JvY2siLCJhIjoiY2puM2lneDk0MDA4NjNybjBxcG84eDZzYyJ9.I9PwvqvKFHGTJqlzBHWKuQ

// Center of Orange County, California
// 33.7175° N, 117.8311° W

// 
// https://leafletjs.com/reference-1.3.4.html#geojson

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

function setup() {
  createCanvas(400, 400);
  // initialize the map on the "map" div with a given center and zoom
  
  var mymap = L.map('map', {
      center: [33.7175, -117.8311],
      zoom: 10
  });
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW9zc3JvY2siLCJhIjoiY2puM2lneDk0MDA4NjNybjBxcG84eDZzYyJ9.I9PwvqvKFHGTJqlzBHWKuQ'
  }).addTo(mymap);
  
  
  
  // a geoJSON Feature
  var OCACShelterFeature = {
    "type": "Feature",
    "properties": {
        "name": "Orange County",
        "amenity": "Animal Shelter",
        "popupContent": "Orange County Animal Center"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [ -117.8311,33.7175]
    }
  };
  
  // a geoJSON Feature
  var AnaheimJurisdictionFeature = {
    "type": "Feature",
    "properties": {
        "name": "Anaheim",
        "amenity": "Jurisdiction",
        "popupContent": "Anaheim"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [ -117.9143,33.8366]
    }
  };
  
  // a geoJSON Feature
  var SantaAnaJurisdictionFeature = {
    "type": "Feature",
    "properties": {
        "name": "Santa Ana",
        "amenity": "Jurisdiction",
        "popupContent": "Santa Ana"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [ -117.8677,33.7455]
    }
  };
  
  // L.geoJSON(OCACShelterFeature).addTo(mymap);
  // L.geoJSON(AnaheimJurisdictionFeature).addTo(mymap);
  // L.geoJSON(SantaAnaJurisdictionFeature).addTo(mymap);
  
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
  
L.geoJSON(OCACShelterFeature, {
    onEachFeature: onEachFeature
}).addTo(mymap);
  
L.geoJSON(SantaAnaJurisdictionFeature, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(mymap);
  
L.geoJSON(AnaheimJurisdictionFeature, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(mymap);
  
 
  
//  Define Sample Lines located through north US border with Canada
var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

// Load Sample Lines at US border with Canada
L.geoJSON(myLines, {
    style: myStyle
}).addTo(mymap);    
  
}

function draw() {
  //background(220);
}