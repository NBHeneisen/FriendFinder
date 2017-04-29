var friends = require("../data/friends");

module.exports = function(app) {


//Create GET route using /api/friends/ to display json of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
//Create a POST route with /api/friends/ to handle incoming survey results and compatibiity logic.
    app.post("/api/friends", function(req, res) {
        var bestFriend = "";
        var bestFriendImg = "";
        var bestFriendScore = 900;
        for (friend=0;friend<friends.length;friend++) {
            score = 0
            console.log(friends[friend].Name);
            for (q=0; q<friends[friend].Answers.length; q++) {
                score += Math.abs(req.body.Answers[q] - friends[friend].Answers[q])
            }
            if (score<bestFriendScore) {
                bestFriendScore = score;
                bestFriend = friends[friend].Name;
                bestFriendImg = friends[friend].Image;
            }
            console.log(score);
        }
        friends.push(req.body);
        console.log(bestFriend);
        console.log(bestFriendImg);
        console.log(bestFriendScore);
        bestFriendObject ={};
        bestFriendObject.Name = bestFriend;
        bestFriendObject.Image = bestFriendImg;
        res.json(bestFriendObject);
    });


};