describe('Navigation between next/prev month', function() {

	beforeEach( function() {

		jasmine.getFixtures().fixturesPath = '.';
		loadFixtures('fixture.html');

		this.model = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
		this.view = new CH.views.Navigation({model: this.model});
		this.view.render();
	});

	it('displays the current month/year', function() {
		expect($('#climate_highlights_nav h2')).toHaveText('August 2012');
	});

	describe('previous button', function() {
		
		it('is a button styled by Bootstrap', function() {
			expect($('#climate_highlights_nav button.previous.btn')).toBeVisible();
		});

		it('displays the name of the previous month', function() {
			expect($('#climate_highlights_nav button.previous span')).toHaveText('July 2012');
		});

		it('disables the button if the previous month has no highlights', function() {
			var m = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
			m.set({'previousCount':0});
			var v = new CH.views.Navigation({model: m});
			v.render();
			expect($('#climate_highlights_nav button.previous')).toBeDisabled();
		});

		it('refreshes the map to display the previous month results when clicked', function() {

			model = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
			spy = CH.eventSpy(CH.views.Navigation, 'previousMonth', {model:model});
			spy.instance.render();
			$('#climate_highlights_nav button.previous').click();
			expect(spy.spy).toHaveBeenCalled();
			expect(model.get('date')).toEqual('2012-07');

		});
	});

	describe('next button', function() {
		
		it('is a button styled by Bootstrap', function() {
			expect($('#climate_highlights_nav button.next.btn')).toBeVisible();
		});

		it('displays the name of the next month', function() {
			expect($('#climate_highlights_nav button.next span')).toHaveText('September 2012');
		});

		it('disables the button if the next month has no highlights', function() {
			var m = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
			m.set({'nextCount':0});
			var v = new CH.views.Navigation({model: m});
			v.render();
			expect($('#climate_highlights_nav button.next')).toBeDisabled();
		});

		it('refreshes the map to display the next month results when clicked', function() {

			model = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
			spy = CH.eventSpy(CH.views.Navigation, 'nextMonth', {model:model});
			spy.instance.render();
			$('#climate_highlights_nav button.next').click();
			expect(spy.spy).toHaveBeenCalled();
			expect(model.get('date')).toEqual('2012-09');

		});
	});
});

