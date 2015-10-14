 function initialize() {
 		var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#1abc9c'},
          {visibility: 'simplified'},
          {gamma: 1},
          {weight: 1}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'on'},
        {hue: '#8e44ad'},]
      },
      {
        featureType: 'water',
        stylers: [{color: '#3498db'}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 40.674, lng: -73.946},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

  }

  google.maps.event.addDomListener(window, 'load', initialize);


