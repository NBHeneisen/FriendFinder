var path = require("path");


module.exports = function(app) {
//create GET route to /survey to display survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });


//create USE route to home.html to display the home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    });
};