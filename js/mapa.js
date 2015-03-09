function initialize() {
  var mapOptions = {
    zoom: 123,
    center: new google.maps.LatLng(15.535564,-88.021946),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
 
  /*var flightPlanCoordinates = [
    new google.maps.LatLng(37.772323, -122.214897),
    new google.maps.LatLng(21.291982, -157.821856),
    new google.maps.LatLng(-18.142599, 178.431),
    new google.maps.LatLng(-27.46758, 153.027892)
  ];*/
    var bounds = new google.maps.LatLngBounds();
    var flightPlanCoordinates = new Array();
    var point;
     $.getJSON("http://178.62.173.38:1567/rutas", function(result){

 
        $.each(result, function(i, field){
          point = new google.maps.LatLng(field.col_lat, field.col_long);
          var contentString = '<div id="content">'+
            '<h3>Velocidad</h3> '+field.col_velocidad+' Km/hr'+
          '</div>';
          var infowindow = new google.maps.InfoWindow({
              content: contentString
          });
          if(field.col_velocidad>50){
          var marker = new google.maps.Marker({
              position: point,
              map: map,
              title:"Información"
          });
            google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
          });
        };
          flightPlanCoordinates.push(point);

        });

          var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#393'
              };



        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          icons: [{
              icon: lineSymbol,
              offset: '100%'
            }],
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        var count = 0;

        window.setInterval(function() {
          count = (count + 1) % 200;

          var icons = flightPath.get('icons');
          icons[0].offset = (count / 2) + '%';
          flightPath.set('icons', icons);
      }, 40);

        flightPath.setMap(map);

    });



}



google.maps.event.addDomListener(window, 'load', initialize);

