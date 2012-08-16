describe('interactive map', function() {

	beforeEach( function() {
		this.app = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
		this.map = new CH.views.Map( { model: this.app } );
	});


	it('defaults to be zoomed/panned to show Alaska', function() {
		expect(this.map.mapOptions().zoom).toEqual(3);
		expect(this.map.mapOptions().center.Xa).toEqual(64);
		expect(this.map.mapOptions().center.Ya).toEqual(-155);
	});
	
	it('restricts the zoom range to keep the focus on Alaska', function() {
		expect(this.map.mapOptions().minZoom).toEqual(3);
		expect(this.map.mapOptions().maxZoom).toEqual(5);
	});

	describe('rendering behavior', function() {

		beforeEach(function() {

			this.map.render();
			// We need to synchronously wait for the Google map to finish rendering before we can examine
			// how our app interacts with it.
			// https://groups.google.com/forum/?fromgroups#!topic/jasmine-js/ExMnH7e29hQ%5B1-25%5D
			waitsFor(function() {
				return $('#climate_highlights_map').html() !== '';
			}, "gmaps never loaded", 15000 );

		});

		afterEach(function() {
			$('#climate_highlight_map').remove();
		});

		it('displays a Google map', function() {
			this.map.render();
			expect($('#climate_highlights_map')).toBeVisible();
		});

		it('draws custom icon markers corresponding to event type to the map', function() {
			// Testing the rendered state of the markers isn't straightforward, because it's done on a canvas.
			// Perhaps there are some events to monitor, but I don't want to test Google's code, so this
			// test will focus on how the view manages adding markers.
			expect(this.map.markers.length).toEqual(3); // there's 4 items in the list, but only 3 have lat/lon and should be here
			expect(this.map.markers[0].position instanceof google.maps.LatLng).toBeTruthy();
			expect(this.map.markers[0].icon).toEqual('img/highlight_icon/high-snow.gif'); // first item with lat/lon

		});

		it('clears any existing custom map markers prior to drawing new ones', function() {
			expect(this.map.markers.length).toEqual(3); // there's 4 items in the list, but only 3 have lat/lon and should be here
			this.map.clearMarkers();
			expect(this.map.markers.length).toEqual(0);
		});

		it('opens the modal Climate Highlight window when the map marker is clicked', function() {

			expect($('#climate_highlight_modal')).not.toBeVisible();
			google.maps.event.trigger(this.map.markers[1], 'click');
			expect($('#climate_highlight_modal')).toBeVisible();
			expect($('#climate_highlight_modal div.modal-header h3')).toHaveText('Wind, August 2012');

			// cleanup
			this.map.markers[1].climateHighlightModal.destroy();
		});
	});
});