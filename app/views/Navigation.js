CH.views.Navigation = Backbone.View.extend({

	el: '#climate_highlights_nav',

	initialize: function() {

		_.bindAll(this);

	},

	render: function() {

		$(this.el).empty();
		template = _.template($('#template-navigation').html());

		$(this.el).append(template({
			month: moment(this.model.get('date'), 'YYYY-MM').format('MMMM YYYY'),
			previous: moment(this.model.get('date'), 'YYYY-MM').subtract('months', 1).format('MMMM YYYY'),
			next: moment(this.model.get('date'), 'YYYY-MM').add('months', 1).format('MMMM YYYY'),
			startmonth: moment(this.model.get('startDate'), 'YYYY-MM').format('YYYY-MM'),
			endmonth: moment(this.model.get('endDate'), 'YYYY-MM').format('YYYY-MM')
		}));

		$('.datepicker').Zebra_DatePicker({
			offset: [5, 100]
		});

		//$(this.el).find('button.previous').attr('disabled', 0 === this.model.get('previousCount'));
		//$(this.el).find('button.next').attr('disabled', 0 === this.model.get('nextCount'));

		return this;

	}
	
});
