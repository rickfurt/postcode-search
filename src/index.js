const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { postcodeSearch } = require("./postcode-search");
const ausPostApi = require("./auspost-api");

app.use(cors());

app.get("/", (req, res) => {
  postcodeSearch(
    ausPostApi,
    req.query.postcode,
    req.query.suburb,
    req.query.state,
    function(result) {
      res.send(result);
    }
  );
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
