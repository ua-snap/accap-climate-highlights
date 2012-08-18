describe("application view (layout and scaffolding)", function() {

  beforeEach( function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('fixture.html');
    this.router = new CH.router();
  });

  it('refreshes its child views (navigation, map, list of highlights) when the date changes on the app model', function() {
    spyOn(this.router.appView.listsView, 'render');
    spyOn(this.router.appView.mapView, 'render');
    spyOn(this.router.appView.navView, 'render');
    this.router.appModel.set({'date':'2012-05'});
    expect(this.router.appView.listsView.render).toHaveBeenCalled();
    expect(this.router.appView.mapView.render).toHaveBeenCalled();
    expect(this.router.appView.navView.render).toHaveBeenCalled();
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

describe('Application container model', function() {

  beforeEach( function() {
    this.model = new CH.models.ClimateHighlightsApp(ch.fixtures.august2012);
  });

  it('assigns its URL and service endpoint from a global configuration object + the endpoint "[configurable endpoint]/YYYY-MM', function() {

    CH.config.appModelUrl = 'http://somewhere.com/';
    expect(this.model.url()).toEqual('http://somewhere.com/highlights/2012-08');

  });

  it('knows what the currently-viewed month is', function() {
    expect(this.model.get('date')).toBeDefined();
  });

  it('defaults to the current month, if none is provided by URL', function() {
    expect(this.model.get('date')).toEqual(moment().format('YYYY-MM'));
  });

  it('creates a Backbone collection from the list of highlights it gets from the server', function() {

    this.model = new CH.models.ClimateHighlightsApp( ch.fixtures.models.august2012);
    expect( this.model.get('collection') instanceof CH.collections.ClimateHighlights ).toBeTruthy();

  });

  it('refreshes the collection after a fetch', function() {
    this.fail('not working');
  });

  it('notices when its date is changed, and refreshes the collection from the server', function() {
    var spy = spyOn(CH.models.ClimateHighlightsApp.prototype, 'fetch').andCallThrough();
    model = new CH.models.ClimateHighlightsApp( ch.fixtures.models.august2012 );
    model.set({'date':'2005-12'});
    expect(spy).toHaveBeenCalled();
  });

});

describe('Main application router', function() {

  beforeEach( function() {
    this.router = new CH.router();
  });

  it('can "Boot" the app, invoking and rendering the navigation, list of highlights, and the map', function() {
    spyOn(this.router.appView, 'render');
    this.router.index();
    expect(this.router.appView.render).toHaveBeenCalled();
  });

  describe('state maintenance', function() {

    it('invokes the correct route with parameter from URL', function() {

      // need the DOM so the triggered events don't fail
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('fixture.html');

      var eventSpy = CH.eventSpy(CH.router, 'date');
      Backbone.history.start();
      eventSpy.instance.navigate('date/2012-08');
      expect(eventSpy.spy).toHaveBeenCalledWith('2012-08');
    });

    it('checks for malformed date input, defaulting to current month/year', function() {
      this.router.date('rubbish');
      expect(this.router.appModel.get('date')).toEqual( moment().format('YYYY-MM') );
    });

    it('binds a handler to the change event on the appModel to refresh the collection', function() {
      this.fail('tbd');
    });

  });

});

describe('application utility belt', function() {

  it('returns a title string from the "kind" category', function() {
    expect(CH.getTitleFromKind('high-temperatures')).toEqual('High Temperatures');
    expect(CH.getTitleFromKind('high-rain')).toEqual('High Rain');
    expect(CH.getTitleFromKind('high-snow')).toEqual('High Snow');
    expect(CH.getTitleFromKind('low-temperatures')).toEqual('Low Temperatures');
    expect(CH.getTitleFromKind('low-rain')).toEqual('Low Rain');
    expect(CH.getTitleFromKind('low-snow')).toEqual('Low Snow');
    expect(CH.getTitleFromKind('blizzard')).toEqual('Blizzard');
    expect(CH.getTitleFromKind('cyclone')).toEqual('Cyclone');
    expect(CH.getTitleFromKind('drought')).toEqual('Drought');
    expect(CH.getTitleFromKind('flooding')).toEqual('Flooding');
    expect(CH.getTitleFromKind('icing')).toEqual('Icing');
    expect(CH.getTitleFromKind('lightning')).toEqual('Lightning');
    expect(CH.getTitleFromKind('sea-ice-changes')).toEqual('Sea Ice Changes');
    expect(CH.getTitleFromKind('wildfire')).toEqual('Wildfire');
    expect(CH.getTitleFromKind('wind')).toEqual('Wind');
  });

});