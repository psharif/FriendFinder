var friendsData = require("../data/friends.js");

module.exports = function(app) {
  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    res.json(req.body);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
};