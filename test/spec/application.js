describe("application layout and scaffolding", function() {

  beforeEach( function() {
    var m = new CH.models.ClimateHighlightsApp();
    var v = new CH.views.ClimateHighlightsApp({
      model: m
    });
    v.render();
  });

  describe("'About' button", function() {

    it('has an About button, styled by Bootstrap', function() {
      expect( $('#climate_highlights a.about.btn.btn-info')).toBeVisible();
    });

    it('opens the About modal dialog when clicked', function() {
      expect( $('#climate_highlights_modal_about')).not.toBeVisible();
      $('#climate_highlights a.about').click();
      expect( $('#climate_highlights_modal_about')).toBeVisible();
      $('#climate_highlights_modal_about button.close').click();
      expect( $('#climate_highlights_modal_about')).not.toBeVisible();

    });

  });

  describe("'Staff/Contact' button", function() {

    it('has an About button, styled by Bootstrap', function() {
      expect( $('#climate_highlights a.staff-contact.btn.btn-info')).toBeVisible();
    });

    it('opens the About modal dialog when clicked', function() {
      expect( $('#climate_highlights_modal_staff-contact')).not.toBeVisible();
      $('#climate_highlights a.staff-contact').click();
      expect( $('#climate_highlights_modal_staff-contact')).toBeVisible();
      $('#climate_highlights_modal_staff-contact button.close').click();
      expect( $('#climate_highlights_modal_staff-contact')).not.toBeVisible();

    });

    it('has a section displaying the logos of partners, each linked to the partner web site', function() {
      expect( $('#climate_highlights div.logos a.accap img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.accap').prop('href')).toEqual('http://accap.uaf.alaska.edu/');
      expect( $('#climate_highlights div.logos a.iarc img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.iarc').prop('href')).toEqual('http://www.iarc.uaf.edu/');
      expect( $('#climate_highlights div.logos a.noaa img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.noaa').prop('href')).toEqual('http://www.noaa.gov/');
      expect( $('#climate_highlights div.logos a.acrc img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.acrc').prop('href')).toEqual('http://akclimate.org/');
    });

  });
});

describe('Application container object', function() {

  beforeEach( function() {
    this.ClimateHighlightsModel = new CH.models.ClimateHighlightsApp();
  });

  it('knows what the currently-viewed month is', function() {
    expect(this.ClimateHighlightsModel.get('date')).toBeDefined();
  });

  it('defaults to the current month, if none is provided by URL', function() {
      expect(this.ClimateHighlightsModel.get('date')).toEqual(moment().format('YYYY-MM-DD'));
  });

  it('requests data as though its id were the date', function() {
    server = sinon.fakeServer.create();

    server.respondWith( 'GET', 'date/2012-08', ch.fixtures.serverResponses.getAugust2012 );

    server.restore();
  });

  it('creates a Backbone collection from the list of highlights it gets from the server', function() {

    this.ClimateHighlightsModel = new CH.models.ClimateHighlightsApp( ch.fixtures.models.august2012);
    expect( this.ClimateHighlightsModel.get('collection') instanceof CH.collections.ClimateHighlights ).toBeTruthy();

  });

});

describe('Main application router', function() {

  it('can reload state from a link', function() {
    this.fail('tbd');
  });

});

describe('application utility belt', function() {

  it('returns a title string from the "kind" category', function() {
    expect(CH.getTitleFromKind('high-temperatures')).toEqual('High Temperatures');
  });

});