INSERT INTO booth (booth_id, booth_name)
    VALUES (1, "Window Seat"), (2, "Bar Table"), 
    (3, "Near Door"),
    (4, "Seat With a View"),
    (5, "Center of the Room");
INSERT INTO reservation (customer_id, customer_name, customer_email, phone_number, booth_id)
    VALUES (1, "Taylor", "Taylor@taylor.com", "555-555-5555", 1),
    (2, "Person", "Person@person.com", "555-555-5556", NULL);