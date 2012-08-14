describe('interactive map', function() {

	it('displays a Google map', function() {
		expect($('#climate_highlights_map')).toBeVisible();
	});

	it('defaults to be zoomed/panned to show Alaska', function() {
		this.fail('tbd');
	});
	
	it('restricts the zoom range to keep the focus on Alaska', function() {
		this.fail('tbd');
	});

	it('draws custom icon markers corresponding to event type to the map', function() {
		this.fail('tbd, need to see what the generated markup is');
	});

	it('opens the modal Climate Highlight window when the map marker is clicked', function() {
		this.fail('tbd, not sure what the markup to check is');
	});

});