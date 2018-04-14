// Style the markers a bit. This will be our listing marker icon.
var defaultIcon = makeMarkerIcon('0091ff');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
var highlightedIcon = makeMarkerIcon('FFFF24');
// Different colors for different building buttons
var ebuildings = makeMarkerIcon('52BE80');
var fdbuildings = makeMarkerIcon('F0B27A');
var bbuildings = makeMarkerIcon('ABEBC6');
var lm = makeMarkerIcon('5DADE2');
var fbuildings = makeMarkerIcon('E6B0AA');
var pbuildings = makeMarkerIcon('F7F9F9');
var cy = makeMarkerIcon('A569BD');
var abuildings = makeMarkerIcon('F0B27A');
var ssbuildings = makeMarkerIcon('797D7F');
var tbuildings = makeMarkerIcon('212F3C');
var sbuildings = makeMarkerIcon('6E2C00');
var embuildings = makeMarkerIcon('E74C3C');


function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}
