/*
SELECT title, description, name 
FROM film inner join language 
	on film.language_id = language.language_id

SELECT title, description, name 
FROM film LEFT JOIN language 
	on film.language_id = language.language_id

SELECT title, description, name 
FROM film RIGHT JOIN language 
	on film.language_id = language.language_id

--3
CREATE TABLE new_film (
  film_id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
); 

INSERT INTO new_film (name)
VALUES ('titanic');

INSERT INTO new_film (name)
VALUES ('grease');

SELECT * FROM new_film

CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER REFERENCES new_film(film_id),
	language_id INTEGER REFERENCES language(language_id),
	title VARCHAR(50),
	score smallint CHECK(score > 0 AND score < 11),
	review_text TEXT,
	last_update TIMESTAMP
)

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 4, 'Sad', 10, 'Great movie')

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (2, 3, 'Fun', 9, 'Very fun movie')

SELECT * FROM customer_review

DELETE FROM new_film WHERE film_id = 1; */


UPDATE film 
SET language_id = 4 WHERE film_id = 1 OR film_id = 2

--2/ Which foreign keys (references) are defined for the customer table? Store_id and adress_id
-- How does this affect the way in which we INSERT into the customer table? the 2 tables have to exist and not be deleted

--3/ We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking? yew it is an easy step because it is not reference in any table

--4
SELECT COUNT(*) FROM RENTAL
WHERE return_date IS NULL


SELECT film.* 
FROM rental inner join inventory 
	on inventory.inventory_id = rental.inventory_id
	inner join film
	on film.film_id = inventory.film_id
WHERE return_date IS NULL 	
ORDER BY rental_rate DESC
LIMIT 30

SELECT * 
FROM film INNER JOIN film_actor 
	on film.film_id = film_actor.film_id
	INNER JOIN actor 
	ON film_actor.actor_id = actor.actor_id
WHERE description ILIKE '%sumo wrestler%'
AND first_name ='Penelope'
AND last_name ='Monroe'

SELECT *
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%Documentary%'

The 3rd film : A film that his friend Matthew Mahan rented. 
He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.


SELECT film.* 
FROM rental inner join inventory 
	on inventory.inventory_id = rental.inventory_id
	inner join film
	on film.film_id = inventory.film_id
	inner join customer
	on customer.customer_id = rental.customer_id
	inner join payment
	on payment.customer_id = customer.customer_id
	and payment.rental_id = rental.rental_id
WHERE first_name ='Matthew'
AND last_name ='Mahan'
AND return_date between '2005-07-28' AND '2005-08-01'
AND amount > 4.00

The 4th film : His friend Matthew Mahan watched this film, as well. 
It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT film.* 
FROM rental inner join inventory 
	on inventory.inventory_id = rental.inventory_id
	inner join film
	on film.film_id = inventory.film_id
	inner join customer
	on customer.customer_id = rental.customer_id
WHERE first_name ='Matthew'
AND last_name ='Mahan'
AND (title ilike '%boat%' OR description ILIKE '%boat%')
order by replacement_cost DESC
limit 1




