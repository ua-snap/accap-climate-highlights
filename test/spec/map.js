describe('interactive map', function() {

	beforeEach( function() {
		this.app = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
		this.map = new CH.views.Map( { model: this.app } );
	});

	it('displays a Google map', function() {
		this.map.render();
		expect($('#climate_highlights_map')).toBeVisible();

			// https://groups.google.com/forum/?fromgroups#!topic/jasmine-js/ExMnH7e29hQ%5B1-25%5D
			waitsFor(function() {
				return $('#climate_highlights_map').html() !== '';
			}, "gmaps never loaded", 15000 );
			
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

	it('draws custom icon markers corresponding to event type to the map', function() {
		this.fail('tbd, need to see what the generated markup is');
	});

	it('opens the modal Climate Highlight window when the map marker is clicked', function() {
		this.fail('tbd, not sure what the markup to check is');
	});

});