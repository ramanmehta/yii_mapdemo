var map;
var pin;
var tilesURL='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
var mapAttrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>';

// add map container
// $('body').prepend('<div id="map" style="height:70vh;width:100%;"></div>');
// MapCreate();
$('#location').prepend('<div id="map" style="height:58vh;width:100%;"></div>');
MapCreate();
 
function MapCreate() {
  var preLat = document.getElementById("mappoi-latitude").value;
  var preLng = document.getElementById("mappoi-longitude").value;

  if(preLat =='' && preLng ==''){
    //console.log('empty');
    // create map instance
  if (!(typeof map == "object")) {
    map = L.map('map', {
      center: [40,0],
      zoom: 3
    });
  }
  else {
    map.setZoom(3).panTo([40,0]);
  }
  // create the tile layer with correct attribution
  L.tileLayer(tilesURL, {
    attribution: mapAttrib,
    maxZoom: 19
  }).addTo(map);
  }else {
    console.log(preLng);
    if (!(typeof map == "object")) {
      map = L.map('map', {
        center: [preLat,preLng],
        zoom: 3
      });
    }
    else {
      map.setZoom(3).panTo([preLat,preLng]);
    }

    const myLatlng = {
                      lat: parseFloat(preLat),
                      lng: parseFloat(preLng)
                    };
    // create the tile layer with correct attribution
    pin = L.marker(myLatlng,{ riseOnHover:true,draggable:true });
    pin.addTo(map);
    L.tileLayer(tilesURL, {
      attribution: mapAttrib,
      maxZoom: 19
    }).addTo(map);
  }
 
}

map.on('click', function(ev) {
  $('#mappoi-latitude').val(ev.latlng.lat);
  $('#mappoi-longitude').val(ev.latlng.lng);
  if (typeof pin == "object") {
    pin.setLatLng(ev.latlng);
  }
  else {
    pin = L.marker(ev.latlng,{ riseOnHover:true,draggable:true });
    pin.addTo(map);
    pin.on('drag',function(ev) {
      $('#mappoi-latitude').val(ev.latlng.lat);
      $('#mappoi-longitude').val(ev.latlng.lng);
    });
  }
});