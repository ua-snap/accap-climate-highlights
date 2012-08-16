describe("climate highlight modal popup", function() {

	beforeEach( function() {
		
		jasmine.getFixtures().fixturesPath = '.';
		loadFixtures('fixture.html');
		this.ClimateHighlight = new CH.models.ClimateHighlight( ch.fixtures.models.daily1 );
		this.ClimateHighlightModal = new CH.views.ClimateHighlightModal( { model: this.ClimateHighlight });
		this.ClimateHighlightModal.render();

	});

	afterEach( function() {
		this.ClimateHighlightModal.destroy();
	});

	describe("title section", function() {
		it('shows the icon associated with the type of the highlight (via CSS background)', function() {
			expect($('#climate_highlight_modal div.modal-header h3')).toHaveClass('high-temperatures');
		});

		it('displays the type of the highlight, and the date', function() {
			expect($('#climate_highlight_modal div.modal-header h3')).toHaveText('High Temperatures, August 2012');
		});
	});

	describe('body section', function() {
		it('has the short summary text of the event has a header', function() {
			expect($('#climate_highlight_modal div.modal-body h4')).toHaveText('daily highlight 1');
		});

		it('contains the full html description of the event', function() {
			expect($('#climate_highlight_modal div.modal-body div.description')).toBeVisible();
			expect($('#climate_highlight_modal div.modal-body div.description').html()).toEqual('<p>full HTML description of first daily highlight</p>');
		});
	});

	it('has a close button in the bottom-right of the modal', function() {
		expect($('#climate_highlight_modal div.modal-footer a[data-dismiss]')).toBeVisible();
	});
	
});