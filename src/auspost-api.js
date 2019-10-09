const fetch = require("node-fetch");
require("dotenv").config();

function searchLocalities(postcode, suburb, state, callback) {
  fetch(
    `https://digitalapi.auspost.com.au/postcode/search.json?q=${postcode}`,
    {
      headers: { "auth-key": process.env.AUTH_KEY }
    }
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(body) {
      callback(body.localities.locality);
    })
    .catch(() => {
      callback({
        success: false
      });
    });
}

exports.searchLocalities = searchLocalities;
