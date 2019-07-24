// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var router = require("express").Router();
var dbConnection = require("../data/connection.js");
var Reservation = require("../data/reservation.js");


// ===============================================================================
// ROUTING
// ===============================================================================
// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

router.get("/api/tables", function(req, res) {
    dbConnection.query("SELECT * FROM reservation JOIN booth ON booth.booth_id = reservation.booth_id",
        function (err, reservations) {
            res.json(Reservation.fromDB(reservations));
        });
});

router.get("/api/waitlist", function(req, res) {
    dbConnection.query("SELECT * FROM reservation WHERE reservation.booth_id IS NULL",
        function (err, reservations) {
            res.json(Reservation.fromDB(reservations));
        });
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
    var reservation = Reservation.fromBody(req.body);
    if (!reservation.isValid()) {
        return res.status(400).json({error: "Reservation is missing fields."});
    }
    dbConnection.query("SELECT booth.booth_id FROM booth LEFT JOIN reservation on reservation.booth_id = booth.booth_id WHERE reservation.customer_id IS NULL LIMIT 1",
        function (err, booth) {
            console.log("booth", booth)
            var newReservation = reservation.toDatabaseObject();
            if (booth.length) {
                newReservation.booth_id = booth[0].booth_id;
            }
            dbConnection.query("INSERT INTO reservation SET ?", newReservation, function (err, result) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({error: "Server Error."});
                }
                if (newReservation.booth_id) {
                    return res.json(true);
                }
                return res.json(false);
            })
        });
});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don't worry about it!

router.post("/api/clear", function(req, res) {
    dbConnection.query("DELETE FROM reservation", function (err, result) {
        res.json({ ok: true });
    });
});

module.exports = router;