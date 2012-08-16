CH.views.Map = Backbone.View.extend({
	
	mapOptions: function() {
		return {
			center: new google.maps.LatLng(64, -155),
			zoom: 3,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			minZoom: 3,
			maxZoom: 5
		};
	},

	el: '#climate_highlights_map',
	hasRendered: false, // flag to avoid rerendering map base layer
	markers: [],
	render: function() {

		// need to be sure to _not_ render again and again.
		if(false === this.hasRendered) {

			this.map = new google.maps.Map(
				document.getElementById("climate_highlights_map"),
				this.mapOptions()
			);
			this.hasRendered = true;
		}

		// guard in case the code somehow gets here with an empty or uninitialized collection
		if( this.model.get('collection') === undefined ) {
			return;
		}

		// there shouldn't be zero in the collection, but it's OK if there are zero (no error is triggered)
		this.model.get('collection').each(function(ch) {

			if( ch.get('lat') && ch.get('lon') ) {

				var image = 'img/highlight_icon/' + ch.get('kind') + '.gif';
				var myLatLng = new google.maps.LatLng(ch.get('lat'), ch.get('lon'));
				this.markers.push(new google.maps.Marker({
					position: myLatLng,
					map: this.map,
					icon: image
				}));
				
			}

		}, this);


	}
});