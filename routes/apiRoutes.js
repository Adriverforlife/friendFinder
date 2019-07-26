// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var router = require("express").Router();
var friends = require("../data/connection.js");


// ===============================================================================
// ROUTING
// ===============================================================================
// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

router.get("/api/survey", function(req, res) {
    
});

router.get("/api/waitlist", function(req, res) {
    
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

router.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
console.log("~~~~~~~~~~~~~~~~~~~~~~~")
var score=0
for(var i=0;i<req.body.score.length;i++){
score+=parseInt(req.body.score[i])
}
var surveytaker={ "name":req.body.customerName,
"photo":req.body.photo,
"total":score}
console.log(surveytaker)
console.log("~~~~~~~~~~~~~~~~~~~~~~~")
var comparisonUsers=[]
for(var i=0;i<friends.length;i++){

var friendsScore=0
for(var j=0;j<friends[i].scores.length;j++){
    friendsScore+=parseInt(friends[i].scores[j])
}
comparisonUsers.push({
    "name":friends[i].name,
    "total":friendsScore,
    "photo":friends[i].photo
})

}
var closeMatch={}
var difference= 50;
for(var i=0;i<comparisonUsers.length;i++){
    var newComparison=Math.abs(comparisonUsers[i].total-surveytaker.total)
    if(newComparison<difference){
        difference=newComparison
        closeMatch=comparisonUsers[i]
    }
}
console.log(closeMatch)
return res.json(closeMatch);

});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don't worry about it!

router.post("/api/clear", function(req, res) {
});

module.exports = router;