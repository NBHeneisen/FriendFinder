var friends = require("../data/friends");

module.exports = function(app) {


//Create GET route using /api/friends/ to display json of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
//Create a POST route with /api/friends/ to handle incoming survey results and compatibiity logic.
    app.post("/api/friends", function(req, res) {
        
    });


};