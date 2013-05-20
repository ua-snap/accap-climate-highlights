CH.views.Navigation = Backbone.View.extend({

	el: '#climate_highlights_nav',

	initialize: function() {

		_.bindAll(this);

	},

	render: function() {

		$(this.el).empty();
		template = _.template($('#template-navigation').html());

		$(this.el).append(template({
			startMonth: moment(this.model.get('startDate'), 'YYYY-MM').format('YYYY-MM'),
			endMonth: moment(this.model.get('endDate'), 'YYYY-MM').format('YYYY-MM')
		}));

		$('.datepicker').Zebra_DatePicker({
			offset: [5, 100],
			format: 'Y-m'
		});

		return this;

	}
	
});
