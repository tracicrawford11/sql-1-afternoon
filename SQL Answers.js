// ## TABLE - PERSON

/*1. CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    height INTEGER,
    city TEXT,
    favorite_color TEXT
    );*/

/*2. INSERT INTO person (name, age, height, city, favorite_color)
VALUES ('Traci', 46, 163, 'McKinney', 'blue'),
			 ('Tony', 58, 183, 'McKinney', 'gold'),
			 ('Cameron', 18, 175, 'McKinney', 'purple'),
			 ('Juston', 30, 185, 'Melissa', 'royal_blue'),
             ('Doice', 58, 183, 'Leonard', 'silver'); */
             
//3. SELECT * FROM person ORDER BY height DESC;

//4. SELECT * FROM person ORDER BY height ASC;

//5. SELECT * FROM person ORDER BY age DESC;

//6. SELECT * FROM person WHERE age > 18;

//7. SELECT * FROM person WHERE age = 18;

//8. SELECT * FROM person WHERE age < 20 OR age > 30;

//9. SELECT * FROM person WHERE age != 27;

//10. SELECT * FROM person WHERE favorite_color != 'red';

//11. SELECT * FROM person WHERE favorite_color != 'red' AND favorite_color != 'blue';

//12. SELECT * FROM person WHERE favorite_color = 'orange' OR favorite_color = 'green';

//13. SELECT * FROM person WHERE favorite_color IN ('orange', 'green', 'blue');

//14. SELECT * FROM person WHERE favorite_color IN ('yellow', 'purple');

// ##TABLE - ORDERS

/*1. CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  person_id VARCHAR(100),
  product_name VARCHAR(100),
  product_price DECIMAL,
  quantity INTEGER);*/

/*2. INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES ('TC1', 'Catfish', 12.50, 2),
('TC2', 'Jambalaya', 14.99, 3),
('CAC', 'French Fries', 4.75, 4),
('JDF', 'Shrimp Boil', 17.00, 2),
('DLF', 'Chicken Fried Steak', 10.60, 1);*/

//3. SELECT * FROM orders;

//4. SELECT SUN(quantity) FROM orders;

//5. SELECT SUM(product_price * quantity) FROM orders;

//6. SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 'TC2';

// ##TABLE - ARTIST

/*1. INSERT INTO artist (artist_id, name)
VALUES (343, 'Tony Crawford'),
(344, 'Deborah Bradford'),
(345, 'Jeff Mercadel');*/

//2. SELECT * FROM artist ORDER BY name DESC LIMIT 10;

//3. SELECT * FROM artist ORDER BY name ASC LIMIT 5;

//4. SELECT * FROM artist WHERE name LIKE 'Black%';

//5. SELECT * FROM artist WHERE name LIKE '%Black%';

// ## TABLE - EMPLOYEE

//1. SELECT first_name, last_name FROM employee WHERE city = 'Calgary';

//2. SELECT MAX(birth_date) FROM employee;

//3. SELECT MIN(birth_date) FROM employee;

//4.A  SELECT employee_id FROM employee WHERE first_name = 'Nancy';
//4.B  SELECT * FROM employee WHERE reports_to = 2;

//5. SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';

// ## TABLE - INVOICE

//1. SELECT COUNT(*) FROM invoice WHERE billing_country = 'USA';

//2. SELECT MAX (total) FROM invoice;

//3. SELECT MIN (total) FROM invoice;

//4. SELECT * FROM invoice WHERE total > 5;

//5. SELECT COUNT(*) FROM invoice WHERE total < 5;

//6. SELECT COUNT(*) FROM invoice WHERE billing_state IN ('CA', 'TX', 'AZ');

//7. SELECT AVG (total) FROM invoice;

//8. SELECT SUM (total) FROM invoice;