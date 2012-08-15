CH.views.Navigation = Backbone.View.extend({

	el: '#climate_highlights_nav',
	render: function() {

		$(this.el).empty();
		template = _.template($('#template-navigation').html());
		
		$(this.el).append(template({
			month: moment(this.model.get('date')).format('MMMM YYYY'),
			previous: moment( this.model.get('date') ).subtract('months', 1).format('MMMM YYYY'),
			next: moment( this.model.get('date') ).add('months', 1).format('MMMM YYYY')
		}));

		$(this.el).find('button.previous').attr('disabled', 0 === this.model.get('previousCount'));
		$(this.el).find('button.next').attr('disabled', 0 === this.model.get('nextCount'));

	}
	
});