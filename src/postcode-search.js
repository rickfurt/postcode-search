function postcodeSearch(dataProvider, postcode, suburb, state, callback) {
  dataProvider.searchLocalities(postcode, suburb, state, function(localities) {
    if (localities.success === false) {
      callback({
        success: false,
        message: `The postcode ${postcode} does not match the suburb ${suburb} and the state ${state}.`
      });
    } else {
      let suburbFound = localities.find(function(locality) {
        return locality.location === suburb;
      });

      if (suburbFound === undefined) {
        callback({
          success: false,
          message: `The postcode ${postcode} does not match the suburb ${suburb}.`
        });
      } else {
        if (suburbFound.state === state) {
          callback({
            success: true,
            message: `The postcode, suburb and state entered are valid.`
          });
        } else {
          callback({
            success: false,
            message: `The suburb ${suburb} does not exist in the state ${state}.`
          });
        }
      }
    }
  });
}

exports.postcodeSearch = postcodeSearch;
