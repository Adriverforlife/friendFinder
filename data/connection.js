// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3307,

//     // Your username
//     user: "root",

//     // Your password
//     password: "root",
//     database: "hotrestaurant"
// });
//beginning of new code
var friends=[{
    "name":"Mr Normie",
    "photo":"https://support.vyond.com/hc/en-us/article_attachments/115001974503/TO_Neutral_Character.png",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],
      "total": function(){
        var friendsScore=0
        // for(var i=0;i<this.scores.length;i++){
        //   friendsScore+=parseInt(this.scores[i])
        // }
        console.log(friendsScore)
        return friendsScore}

  },
  {
    "name":"Psycopath",
    "photo":"https://vignette.wikia.nocookie.net/villains/images/4/4d/Psycho_borderlands.PNG",
    "scores":[
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "total": function(){
        var friendsScore=0
        for(var i=0;i<this.scores.length;i++){
          friendsScore+=parseInt(friends[i].scores[j])
        }
        return friendsScore}

  },
  {
    "name":"Mr LAWFUL GOOD PITA",
    "photo":"https://static1.squarespace.com/static/5840d403bebafba4c28d6c4f/5840dc4a46c3c4e5e4b2af36/5842119f893fc0f82bcf506a/1480725201499/paladin-wallpaper%5B1%5D.jpg",
    "scores":[
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      "total": function(){
        var friendsScore=0
        for(var i=0;i<this.scores.length;i++){
          friendsScore+=parseInt(friends[i].scores[j])
        }
        return friendsScore
      }
  }]

//end of new code
module.exports = friends;
