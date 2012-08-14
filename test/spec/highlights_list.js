describe('list of climate highlights', function() {
	it('has a list of daily events', function() {
		expect($('#climate_highlights_lists ul.daily')).toBeVisible();
	});
	it('has a list of monthly events', function() {
		expect($('#climate_highlights_lists ul.monthly')).toBeVisible();
	});
});

describe('climate highlight list view', function() {
	
	it('displays the short summary description of the climate highlight', function() {
		expect($('#climate_highlights_lists ul.daily:first span.summary')).toHaveText('first daily climate highlight');
	});

	it('displays a Bootstrap icon widget so the summary looks clickable', function() {
		expect($('#climate_highlights_lists ul.daily:first i.icon-zoom-in')).toBeVisible();
	});

	it('opens the Climate Highlight Modal view window when it is clicked', function() {
		this.fail('tbd until event model is worked out', function() {
		});
	});
});