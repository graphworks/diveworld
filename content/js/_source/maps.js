google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {

        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,

        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(47.5043881, 19.07354220000002),

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "hue": "#7fc8ed"
            }, {
                "saturation": 55
            }, {
                "lightness": -6
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "hue": "#7fc8ed"
            }, {
                "saturation": 55
            }, {
                "lightness": -6
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#83cead"
            }, {
                "saturation": 1
            }, {
                "lightness": -15
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#f3f4f4"
            }, {
                "saturation": -84
            }, {
                "lightness": 59
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{
                "hue": "#ffffff"
            }, {
                "saturation": -100
            }, {
                "lightness": 100
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffffff"
            }, {
                "saturation": -100
            }, {
                "lightness": 100
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "hue": "#bbbbbb"
            }, {
                "saturation": -100
            }, {
                "lightness": 26
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffcc00"
            }, {
                "saturation": 100
            }, {
                "lightness": -35
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffcc00"
            }, {
                "saturation": 100
            }, {
                "lightness": -22
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [{
                "hue": "#d7e4e4"
            }, {
                "saturation": -60
            }, {
                "lightness": 23
            }, {
                "visibility": "on"
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var locations = [
              ['DiveWorld Hungary', 47.5043881, 19.07354220000002,]
            ];

    var contentString = ['<div id="maps-content">' +
              '<h3>DiveWorld Hungary</h3>' +
              '<p><b>1077 Budapest, Rózsa utca 27.</b><br/>' +
              '+36 30 587 5989<br/>' +
              '+36 20 497 6026<br/>' +
              'info@diveworld.hu<br/><br/>' +
              '<a href="https://maps.google.com/maps?output=classic&f=d&daddr=Rózsa+u.+27,+Budapest,+1077" title="Útvonaltervezés" class="btn btn_1 normal" target="_blank">Útvonaltervezés</a>' +
              '</div>'
            ];

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    
    // Add Marker
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(47.5043881, 19.07354220000002), 
		map: map,		
	});	
	
	// Add listener for a click on the pin
	google.maps.event.addListener(marker1, 'click', function() {  
		infowindow1.open(map, marker1);  
	});
		
	// Add information window
	var infowindow1 = new google.maps.InfoWindow({  
		content:  createInfo(contentString)
	}); 
	
	// Create information window
	function createInfo(content) {
		return '<div class="infowindow">'+ content +'</div>';
	} 
}