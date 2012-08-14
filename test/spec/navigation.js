describe('Navigation between next/prev month', function() {

	it('displays the current month/year', function() {
		expect($('#climate_highlights_nav h2')).toHaveText('August 2012');
	})

	describe('previous button', function() {
		
		it('is a button styled by Bootstrap', function() {
			expect($('#climate_highlights_nav button.previous.btn')).toBeVisible();
		});

		it('displays the name of the previous month', function() {
			expect($('#climate_highlights_nav button.previous')).toHaveText('July');
		});

		it('disables the button if the previous month has no highlights', function() {
			// some setup needed here
			expect($('#climate_highlights_nav button.previous')).toBeDisabled();
		});

		it('refreshes the map to display the previous month results when clicked', function() {
			this.fail('tbd, need to decide how the event model will bind this');
		});
	});

	describe('next button', function() {
		
		it('is a button styled by Bootstrap', function() {
			expect($('#climate_highlights_nav button.next.btn')).toBeVisible();
		});

		it('displays the name of the next month', function() {
			expect($('#climate_highlights_nav button.next')).toHaveText('September');
		});

		it('disables the button if the next month has no highlights', function() {
			// some setup needed here
			expect($('#climate_highlights_nav button.next')).toBeDisabled();
		});

		it('refreshes the map to display the next month results when clicked', function() {
			this.fail('tbd, need to decide how the event model will bind this');
		});
	});
});

