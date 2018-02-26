var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listens for Requests on Server Starts It
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});