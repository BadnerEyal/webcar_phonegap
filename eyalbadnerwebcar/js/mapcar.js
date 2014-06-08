

		
var dist=1;
		$( document ).delegate("#directionmap‬", "pageinit", function() {
    $("#tocalculate").hide();//מסתיר כפתור חישוב השכרה
		
			$('#submit').click(function(){runGeocoder()});
			
            $('#map_canvas').gmap({'center': '0,0' ,zoom:30});
		   
            $('#map_canvas').gmap('getCurrentPosition', function(status, position) {
                if ( status === 'OK' ) {
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
					
					// ** store the current location globally
					currentPosition = 	new google.maps.LatLng(lat, lon);	
					
				   $('#map_canvas').gmap('addMarker',{'position': currentPosition});
				   $('#map_canvas').gmap('option', 'center', currentPosition);
				   $('#map_canvas').gmap('option', 'zoom', 15);
							 
            } else {
				showError(status);
			}
        }); 
              
				
        });
		
		
	function runGeocoder(){
		// create a geoCoder object
		var geoCoder = new google.maps.Geocoder();
		
		// get the address name 
		var stringToSearch = $('#to').val();
		
		geoCoder.geocode({ 
			'address': stringToSearch }, 
			function (results, status) {
				// this is the Callback function. it will be called after the server responds
				// it will get a results and a status arguments
				
				// check if the request was successfull 
				if (status == google.maps.GeocoderStatus.OK) {
					// translate the data from the callback and display a marker on the map
					var resultLocation = results[0].geometry.location;
					$('#map_canvas').gmap('addMarker',{'position': resultLocation});
					
					// create the directionsService object that will calculate the route
					var directionsService = new google.maps.DirectionsService();
					// prepare the request for the directionsService
					var request = {
						'origin': currentPosition,
						'destination': resultLocation,
						'travelMode': google.maps.DirectionsTravelMode.DRIVING,
						'unitSystem' : google.maps.UnitSystem.METRIC
					};
					// feed the directionsService with the request and wait for callback
					directionsService.route(
						request, 
						function (response, status) {
							// this is the Callback function. it will be called after the server responds
							// it will get a response (witch is a DirectionsResult object) and a status arguments
							
							// check if the request was successfull 
							if(status===google.maps.DirectionsStatus.OK){
								// create the DirectionsRenderer object that will paint the route on the map
								var routePainter = new google.maps.DirectionsRenderer();
								
								// in order to link the map to the DirectionsRenderer we must contain it within a variable
								var mapBundle = $('#map_canvas').gmap('get','map');
								routePainter.setMap(mapBundle);
								
								// feed the DirectionsRenderer the informtaion the paint the route
								routePainter.setDirections(response);
								
								// get the distance from the response // 
								var routeDistance = response.routes[0].legs[0].distance.value;
								alert ("dist = " + routeDistance/1000 + " km \n Click the new button appears below calculate price ty");
								dist=routeDistance/1000;
								 $("#submit").hide();//מסתיר כפתור חיפוש מרחק
								$("#tocalculate").show();//מציג כפתור חישוב מחיר לפי מרחק
							}else{
								// the request failed
								// do some error handling
								alert("Failed to get route");
							}
							
						}
					);
				}
				else{
					//TODO: handle error
				}
			});
		
		
	}
		
	function showError(error)
	  {
	  switch(error.code) 
		{
		case error.PERMISSION_DENIED:
		 alert("User denied the request for Geolocation.")
		  break;
		case error.POSITION_UNAVAILABLE:
		alert("Location information is unavailable.")
		  break;
		case error.TIMEOUT:
		 alert("The request to get user location timed out.")
		  break;
		case error.UNKNOWN_ERROR:
		 alert("An unknown error occurred.")
		  break;
		}
	  }
