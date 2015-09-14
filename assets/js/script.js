	



$(document).ready(function(){

	//

	L.mapbox.accessToken = 'pk.eyJ1IjoiYmZtY2dvMiIsImEiOiJlS0c1a1drIn0.GNJBFHhd6pqumZDjScZF7Q';

	var southWest = L.latLng([40.277987,-107.398623]), 
	    northEast = L.latLng([40.599243, -106.330973]),
	    bounds = L.latLngBounds(southWest, northEast);


	// creating maps and zoom boundaries
	var map = L.mapbox.map('map', 'mapbox.streets',{
		maxBounds:bounds,	
		minZoom:10
	}).setView([40.496924, -106.843453], 20);

	map.fitBounds(bounds);

	// Creating Hikes I've been on
	function addMarkerToMap (color, latitude, longitude, videoID){
    	L.marker([latitude,longitude], {
	        icon: L.mapbox.marker.icon({
	            'marker-size': 'large',
	            'marker-color': color
	        })
	    })
	    .addTo(map)
	    .on("click", function() {
	   		// if (videoID) {
		  		// console.log("marker clicked with video url: ", videoID);
		  		// var createVideo = document.createElement("iframe");
				// createVideo.setAttribute("class", "video-preview")
				// createVideo.setAttribute("src","https://player.vimeo.com/video/"+videoID+"?autoplay=0&loop=1&title=0&byline=0&portrait=0")
				// createVideo.setAttribute("height", "25%");
				// createVideo.setAttribute("width", "100%");
				// createVideo.setAttribute("frameborder", "0");
				// createVideo.setAttribute("zIndex","1");
				// document.querySelector("body").appendChild(createVideo);
	   		// };

	   		
	    	var feed = new Instafeed({
    		    clientId: '76c007752c09429d9664110441bb0900',
    		    get: 'location',
    		    locationId: 234576013,
    		    limit: 10
    		});
    		feed.run();
	    	
	    })
	}

	addMarkerToMap("#fa0", 40.18044715758667, -106.85165405273438, "72168339");
	//addMarkerToMap("#fa0", 37.82958198283902, -83.55960845947266, "23869720");
	//addMarkerToMap("#fa0", 37.312836976839144, -113.01464080810547, "12463658");
	//addMarkerToMap("#fa0", 33.803863538792875, -84.14525270462036, "104898610");
	//addMarkerToMap("#fa0", 36.272510970903284, -121.80267333984376, "58045466");
	//addMarkerToMap("#fa0", 40.72306326129451, -73.98983001708984, "106468233");
	//addMarkerToMap("#fa0", 38.725161847874716, -109.56390380859375, "110636084");

	//addMarkerToMap("#05B8CC", 44.94232389645865, -108.20932388305664, "131850801");
	//addMarkerToMap("#05B8CC", 40.26996488643512, -105.58685302734375, "92559369");
	//addMarkerToMap("#05B8CC", 35.96689214303232, -111.95343017578125, "75112600");
	//addMarkerToMap("#05B8CC", 31.04433054150274, -98.48221778869629, "14903221");


});
