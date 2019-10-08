const { postcodeSearch } = require("../src/postcode-search");

test("successfully matches postcode, suburb and state", done => {
  const stubLocalitiesProvider = {
    searchLocalities: (postcode, suburb, state, callback) => {
      callback([
        {
          location: "HAYMARKET",
          state: "NSW",
          postcode: "2000"
        }
      ]);
    }
  };

  postcodeSearch(stubLocalitiesProvider, "2000", "HAYMARKET", "NSW", function(
    result
  ) {
    expect(result).toEqual({
      success: true,
      message: "The postcode, suburb and state entered are valid."
    });
    done();
  });
});

test("fails when postcode does not match suburb", done => {
  const stubLocalitiesProvider = {
    searchLocalities: (postcode, suburb, state, callback) => {
      callback([
        {
          location: "HAYMARKET",
          state: "NSW",
          postcode: "2000"
        }
      ]);
    }
  };

  postcodeSearch(stubLocalitiesProvider, "2000", "BROADWAY", "NSW", function(
    result
  ) {
    expect(result).toEqual({
      success: false,
      message: "The postcode 2000 does not match the suburb BROADWAY."
    });
    done();
  });
});

test("fails when suburb does not match state", done => {
  const stubLocalitiesProvider = {
    searchLocalities: (postcode, suburb, state, callback) => {
      callback([
        {
          location: "SYDNEY",
          state: "NSW",
          postcode: "2000"
        }
      ]);
    }
  };

  postcodeSearch(stubLocalitiesProvider, "2000", "SYDNEY", "TAS", function(
    result
  ) {
    expect(result).toEqual({
      success: false,
      message: "The suburb SYDNEY does not exist in the state TAS."
    });
    done();
  });
});
