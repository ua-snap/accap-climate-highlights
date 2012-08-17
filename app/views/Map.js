CH.views.Map = Backbone.View.extend({
	
	mapOptions: function() {
		return {
			center: new google.maps.LatLng(64, -155),
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			minZoom: 3,
			maxZoom: 5
		};
	},

	el: '#climate_highlights_map',
	hasRendered: false, // flag to avoid rerendering map base layer
	markers: [],

	initialize: function() {
		_.bindAll(this);
	},

	render: function() {

		this.renderBaseMap();

		// guard in case the code somehow gets here with an empty or uninitialized collection
		if( this.model === undefined || this.model.get('collection') === undefined ) {
			throw('The climate highlights were not loaded properly for display on the map.');
		}

		this.clearMarkers();
		this.renderMarkers();

	},

	// just to be called once when the page is first rendered
	renderBaseMap: function() {
		if(false === this.hasRendered) {

			this.map = new google.maps.Map(
				document.getElementById("climate_highlights_map"),
				this.mapOptions()
			);
			this.hasRendered = true;
		}
	},

	renderMarkers: function() {
	
		// there shouldn't be zero in the collection, but it's OK if there are zero (no error is triggered)
		this.model.get('collection').each(function(ch) {

			if( ch.get('lat') && ch.get('lon') ) {

				var image = 'img/icons/' + ch.get('kind') + '.gif';
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(ch.get('lat'), ch.get('lon')),
					map: this.map,
					icon: image,
					climateHighlightModal: new CH.views.ClimateHighlightModal( { model: ch })
				});
				google.maps.event.addListener(marker, 'click', function(e) {
					// We're in the context of the marker object, here.
					this.climateHighlightModal.render();
				});
				this.markers.push(marker);
				
			}

		}, this);

	},

	clearMarkers: function() {

		_.each(this.markers, function(marker, index, list) {
			list[index].setMap(null); // remove the marker from the map
			delete(list[index]); // remove the marker itself
		});
		this.markers = [];

	}
});