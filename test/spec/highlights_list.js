describe('list view of climate highlights', function() {

	beforeEach( function() {

		this.model = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
		this.view = new CH.views.ClimateHighlightsLists( {model: this.model} );
		this.view.render();

	});

	it('has a list of daily events', function() {
		expect($('#climate_highlights_lists ul.daily')).toBeVisible();
	});

	it('has a list of monthly events', function() {
		expect($('#climate_highlights_lists ul.monthly')).toBeVisible();
	});
});

describe('climate highlight list item view', function() {

	afterEach( function() {
		$('#climate_highlight_modal').modal('hide');
	});

	it('displays the short summary description of the climate highlight', function() {
		expect($('#climate_highlights_lists ul.daily li:first span.summary')).toHaveText('daily highlight 1');
	});

	it('attaches the class of the kind of highlight to the list item', function() {
		expect($('#climate_highlights_lists ul.daily li:first')).toHaveClass('high-temperatures');
	});

	it('displays a Bootstrap icon widget so the summary looks clickable', function() {
		expect($('#climate_highlights_lists ul.daily:first i.icon-zoom-in')).toBeVisible();
	});

	it('opens the Climate Highlight Modal view window when it is clicked', function() {
		$('#climate_highlights_lists ul.daily li:first').click();
		expect($('#climate_highlight_modal')).toBeVisible();
	});
});