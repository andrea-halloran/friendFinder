var friendData = require("../app/data/friends");

var path = require('path');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("api/friends", function (req, res) {

            // find the difference of the two surveys

                // var existingSurvey = 

            // calculate total difference 

                // loop through friendData 

                // differeneces from friendData to newSurvey

            // POST to the API

                // friendData.push(newSurvey)

            // display the closest match (name and picture)



        })

    }

