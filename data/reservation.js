
function Reservation(customerId, customerName, customerEmail, phoneNumber, tableName) {
    this.customerID = customerId;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.phoneNumber = phoneNumber;
    this.tableName = tableName;
    this.toDatabaseObject = function () {
        return {
            customer_id: this.customerID,
            customer_name: this.customerName,
            customer_email: this.customerEmail,
            phone_number: this.phoneNumber
        }
    }
    this.isValid = function () {
        return !!(this.customerName && this.customerEmail && this.phoneNumber);
    }
}

Reservation.fromDB = function (reservations) {
    var results = [];
    for(var i = 0; i < reservations.length; i++) {
        var reservation = new Reservation(
            reservations[i].customer_id,
            reservations[i].customer_name,
            reservations[i].customer_email,
            reservations[i].phone_number,
            reservations[i].booth_name
        )
        results.push(reservation);
    }
    return results;
}

Reservation.fromBody = function (body) {
    return new Reservation(
        body.customerID,
        body.customerName,
        body.customerEmail,
        body.phoneNumber
    )
}

module.exports = Reservation;