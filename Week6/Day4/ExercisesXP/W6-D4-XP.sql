SELECT * FROM employees

SELECT first_name AS first
FROM employees;

SELECT last_name AS last
FROM employees;

SELECT DISTINCT department_id FROM employees

SELECT * FROM employees ORDER BY first_name

--4
SELECT first_name, last_name, salary, salary * 0.15 AS PF
FROM employees

--5 
SELECT employee_id, first_name, last_name, salary 
FROM employees
ORDER BY salary ASC

--6
SELECT SUM (salary) FROM employees

--7
SELECT MIN (salary) FROM employees
SELECT MAX (salary) FROM employees

--8
SELECT AVG (salary) FROM employees

--9
SELECT COUNT (employee_id) FROM employees

--10 
SELECT UPPER(first_name) AS Uppercasefirst_name
FROM employees;

--11
SELECT SUBSTRING(first_name, 1, 3) AS ExtractString
FROM employees

--12
SELECT first_name || ' ' || last_name AS full_name
FROM employees

--13
SELECT first_name || ' ' || last_name AS full_name 
FROM employees;

SELECT LEN('full_name');

--14
SELECT * FROM employees
WHERE frist_name SIMILAR TO '%[0-9]*%'

--15
SELECT * FROM employees
LIMIT 10


--Restricting And Sorting
--1
SELECT first_name, last_name, salary 
FROM employees
WHERE salary between 10000 AND 15000

--2
SELECT first_name, last_name, hire_date 
FROM employees
WHERE EXTRACT(YEAR FROM hire_date) = 1987

--3
SELECT first_name, last_name, hire_date 
FROM employees
WHERE first_name ILIKE '%c%' AND first_name ILIKE '%e%'

--4
SELECT last_name, salary , job_title
FROM employees E INNER JOIN jobs J
	ON E.job_id = J.job_id
WHERE job_title NOT IN ('Programmer', 'Shipping Clerk')
AND salary NOT IN (4.500, 10.000, 15.000)

--5
SELECT last_name FROM employees
WHERE LENGTH(last_name) = 6

--6
SELECT last_name FROM employees
WHERE last_name SIMILAR TO '__e%'

--7
SELECT E.* , job_title
FROM employees E INNER JOIN jobs J
	ON E.job_id = J.job_id
	
--8
SELECT *
FROM employees E 
WHERE UPPER(last_name) IN ('JONES', 'BLAKE','SCOTT','KING', 'FORD')
