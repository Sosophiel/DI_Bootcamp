
CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (30) NOT NULL,
	last_name VARCHAR (30) NOT NULL
)


CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false, 
	customer_id INTEGER REFERENCES customer (id)
)

INSERT into customer (first_name, last_name)
VALUES ('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive');
	
INSERT into customer_profile (isLoggedIn, customer_id)
VALUES (
	true,
	(SELECT id FROM customer where first_name= 'John')
	)

INSERT into customer_profile (isLoggedIn, customer_id)
VALUES (
	false,
	(SELECT id FROM customer where first_name= 'Jerome')
	)
	
SELECT c.first_name
FROM customer_profile p inner join customer c
	on p.customer_id = c.id
where isLoggedIn = true

SELECT p.first_name, c.isLoggedIn
FROM customer p left join customer_profile c
	on c.customer_id = p.id

SELECT count(*)
FROM customer c left join customer_profile p
	on p.customer_id = c.id
where p.customer_id is null
or p.isLoggedIn = false
