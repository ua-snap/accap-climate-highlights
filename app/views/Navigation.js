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

                if(this.model.get('enableDateRange')) {
			$("#show-date-range").attr("checked", true);
			$("#date-range-picker-text").text("Choose date range:");
                        $("#end-month-container").show();
                } else {
			$("#show-date-range").attr("checked", false);
			$("#date-range-picker-text").val("Choose date:");
                        $("#end-month-container").hide();
                }

		$('.datepicker').Zebra_DatePicker({
			offset: [5, 100],
			format: 'Y-m'
		});

		return this;

	}
	
});
