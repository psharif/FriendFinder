var friendsData = require("../data/friends.js");

function getDifference(survey1, survey2){
	var difference = 0;

	survey1.forEach(function(el, index){
		if(el === "" || survey2[index] === ""){
		}
		difference += Math.abs(parseInt(el) - parseInt(survey2[index]));
	});
	return difference; 
}

function findMatch(newFriend){
	var match = "";
	var differences = [];
	friendsData.forEach(function(el){
		differences.push(getDifference(el.survey, newFriend.survey));
	});

	var small = differences.sort()[0];

	friendsData.forEach(function(el){
		if(small === getDifference(el.survey, newFriend.survey)){
			match = el;
		}
	});

	return match;
}

module.exports = function(app) {
  app.post("/api/friends", function(req, res) {
    var match = findMatch(req.body);
    friendsData.push(req.body);
    res.json(match);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
};

