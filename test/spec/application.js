describe("application layout and scaffolding", function() {

  beforeEach( function() {
    var m = new CH.models.ClimateHighlights();
    var v = new CH.views.ClimateHighlights({
      model: m
    });
    v.render();
  });

  describe("'About' button", function() {

    it('has an About button, styled by Bootstrap', function() {
      expect( $('#climate_highlights button.about.btn.btn-info')).toBeVisible();
    });

    it('opens the About modal dialog when clicked', function() {
      expect( $('#climate_highlights_modal_about')).not.toBeVisible();
      $('#climate_highlights button.about').click();
      expect( $('#climate_highlights_modal_about')).toBeVisible();
    });

  });

  describe("'Staff/Contact' button", function() {
    it('has an About button, styled by Bootstrap', function() {
      expect( $('#climate_highlights button.staff-contact.btn.btn-info')).toBeVisible();
    });
    it('opens the About modal dialog when clicked', function() {
      expect( $('#climate_highlights_modal_staff-contact')).not.toBeVisible();
      $('#climate_highlights button.staff-contact').click();
      expect( $('#climate_highlights_modal_staff-contact')).toBeVisible();
    });

    it('has a section displaying the logos of partners, each linked to the partner web site', function() {
      expect( $('#climate_highlights div.logos a.accap img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.accap').prop('href')).toEqual('http://accap.uaf.alaska.edu');
      expect( $('#climate_highlights div.logos a.iarc img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.iarc').prop('href')).toEqual('http://www.iarc.uaf.edu/');
      expect( $('#climate_highlights div.logos a.noaa img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.noaa').prop('href')).toEqual('http://http://www.noaa.gov/');
      expect( $('#climate_highlights div.logos a.acrc img')).toBeVisible();
      expect( $('#climate_highlights div.logos a.acrc').prop('href')).toEqual('http://http:climate.gi.alaska.edu/');
    });

  });
});

describe('Application container object', function() {

  it('knows what the currently-viewed month is', function() {
    this.fail('tbd');
  });

  it('defaults to the current month, if none is provided by URL', function() {
    this.fail('tbd');
  });

});