DROP DATABASE IF EXISTS hotrestaurant;
CREATE database hotrestaurant;

USE hotrestaurant;

CREATE TABLE booth (
    booth_id INT NOT NULL AUTO_INCREMENT,
    booth_name VARCHAR(45) NOT NULL,
    PRIMARY KEY (booth_id)
);

CREATE TABLE reservation (
    customer_id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(45) NOT NULL,
    customer_email VARCHAR(45) NOT NULL,
    phone_number VARCHAR(14) NOT NULL,
    booth_id INT NULL,
    INDEX booth_ind (booth_id),
    FOREIGN KEY (booth_id)
        REFERENCES booth(booth_id)
        ON DELETE CASCADE,
    PRIMARY KEY (customer_id)
);